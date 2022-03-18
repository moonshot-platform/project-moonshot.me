import { Injectable, Provider } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ethers } from 'ethers';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { WindowRefService } from './window-ref.service';
import { LocalStorageService } from './local.storage.service';

import silverTokenAbi from './../../assets/abis/silver.token.abi.json';
import mshotTokenAbi from './../../assets/abis/mshot.token.abi.json';
import buyMshotTokenAbi from './../../assets/abis/buy-moonshot-token.abi.json';
import Web3 from 'web3';
import Web3Modal from "web3modal";
import { setInterval } from 'timers';

export const SilverAddress = environment.silverAddress;

export enum CLAIM_CASES {
  CONNECT_WALLET = 'Connect Wallet',
  CLAIM = 'Claim MSHOT',
  CLAIMING = 'Claiming...',
  CLAIMED = 'Claimed',
  FAILED = 'Failed!',
  REJECTED = 'Rejected!',
}

const providerMainNetURL = environment.providerMainNetURL;
const providerTestNetURL = environment.providerTestNetURL;
const providerChainID = environment.chainId;
const NETWORK = 'binance';

//  Create WlletConnect Provider
const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    rpc: {
      1: providerMainNetURL,
      56: providerMainNetURL,
      97: providerTestNetURL,
    },
    network: NETWORK,
    chainId: providerChainID,
  }
};


const web3Modal = new Web3Modal({
  theme: "dark",
  cacheProvider: false, // optional
  providerOptions, // required
  disableInjectedProvider: false
});

const provider = new WalletConnectProvider(<any>{
  package: WalletConnectProvider,
  rpc: {
    1: providerMainNetURL,
    56: providerMainNetURL,
    97: providerTestNetURL,
  },
  network: NETWORK,
  chainId: providerChainID,
});

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  private readonly ACCOUNTS_CHANGED: string = 'accountsChanged';
  private readonly CHAIN_CHANGED: string = 'chainChanged';
  private readonly DISCONNECT: string = 'disconnect';
  private readonly ETH_REQUEST_ACCOUNTS: string = 'eth_requestAccounts';

  public data = new Subject<any>();
  private connectedStateSubject = new Subject<boolean>();

  provider: ethers.providers.Web3Provider;
  signer: ethers.providers.JsonRpcSigner;
  silverContract: any;
  mshotBalanceContract: any;

  private isConnected = false;
  private account = '';

  constructor(
    private windowRef: WindowRefService,
    private toastrService: ToastrService,
    private localStorageService: LocalStorageService,
  ) { }

  convertBalance(balance: number): string {
    balance = balance / 1e9;
    balance = Math.trunc(balance);

    return balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  async connectToWallet(origin = 0) {
    const window = this.windowRef.nativeWindow.ethereum;

    if (origin == 1) {
      this.setWalletState(true);
    }

    try {
      if (typeof window !== 'undefined' && typeof window !== undefined) {
        await this.windowRef.nativeWindow.ethereum.request({ method: this.ETH_REQUEST_ACCOUNTS });

        this.provider = new ethers.providers.Web3Provider(this.windowRef.nativeWindow.ethereum);

        let currentNetwork = await this.provider.getNetwork();
        if (currentNetwork.chainId != providerChainID) {
          this.toastrService.error('You are on the wrong network');
          this.setWalletState(false);
          throw 'Wrong network';
        }

        await this.getAccountAddress();
        this.localStorageService.setWallet(1);
        // Subscribe to accounts change

        this.windowRef.nativeWindow.ethereum.on(this.ACCOUNTS_CHANGED, async (accounts: string[]) => {
          if (accounts.length == 0) {
            // MetaMask is locked or the user has not connected any accounts
            this.setWalletDisconnected();
            this.toastrService.info('Wallet disconnected!');
          } else {
            await this.connectToWallet();
          }
        });

        // Subscribe to session disconnection
        this.windowRef.nativeWindow.ethereum.on(this.CHAIN_CHANGED, async (code: number, reason: string) => {
          await this.connectToWallet();
          this.toastrService.info('You have changed the chain!');
          this.setWalletState(true);

          // location.reload();
        });

        // Subscribe to session disconnection
        this.windowRef.nativeWindow.ethereum.on(this.DISCONNECT, (code: number, reason: string) => {
          if (provider.close) provider.close();
          this.setWalletDisconnected();
        });

        this.setWalletState(true);

        // if (origin == 0) location.reload();
      }
    } catch (e) {
      this.setWalletDisconnected();
    }
  }

  async connectToWalletConnect(origin = 0) {

    try {
      this.provider = new ethers.providers.Web3Provider(provider);
      await provider.enable();

      await this.getAccountAddress();
      this.localStorageService.setWallet(2);

      // Subscribe to accounts change
      provider.on(this.ACCOUNTS_CHANGED, (accounts: string[]) => this.connectToWalletConnect());

      // Subscribe to session disconnect
      provider.on(this.DISCONNECT, (code: number, reason: string) => this.setWalletDisconnected());

      // Subscribe to session disconnection
      provider.on(this.CHAIN_CHANGED, (code: number, reason: string) => {

        this.connectToWalletConnect();
        this.setWalletDisconnected();

        location.reload();


      });

      this.setWalletState(true);

      if (origin === 0) location.reload();
    }

    catch (e) {
      this.setWalletDisconnected();
      location.reload(); // FIXME: Without reloading the page, the WalletConnect modal does not open again after closing it
    }
  }

  async getAccountAddress() {
    this.signer = this.provider.getSigner();
    const address = await this.signer?.getAddress();
    const network = await this.provider.getNetwork();

    if (network.chainId == environment.chainId) {
      this.silverContract = new ethers.Contract(SilverAddress, silverTokenAbi, this.signer);
      // this.mshotBalanceContract = new ethers.Contract("0x040236b8dBa062915BD792277141dAA714814551", mshotTokenAbi, this.signer);
      // console.log('Setting contacts');

    }

    const data = {
      'provider': this.provider,
      'signer': this.signer,
      'address': address,
      'networkId': network
    }

    this.account = address;
    if (data.address !== undefined) {
      this.setWalletState(true);
    }
    this.updateData(data);
    // console.log('GET ACCOUNT ADDRESS : ' + address);

  }

  setWalletDisconnected() {
    this.isConnected = false;
    this.account = '';
    this.setWalletState(this.isConnected);
    this.localStorageService.removeWallet();
  }

  updateData(state: any) {
    this.data.next(state);
  }

  getData(): Observable<any> {
    return this.data.asObservable();
  }

  setWalletState(connected: boolean) {
    this.connectedStateSubject.next(connected);
    return this.isConnected;
  }

  onWalletStateChanged() {
    return this.connectedStateSubject.asObservable();
  }

  async init(): Promise<boolean> {
    const wallet = this.localStorageService.getWallet();

    switch (wallet) {
      case 1:
        await this.connectToWallet(wallet);
        break;
      case 2:
        await this.connectToWalletConnect(wallet);
        break;
    }

    await this.getAccountAddress();

    return wallet != undefined || this.account != undefined;
  }

  async getUserBalance(userAddress: string): Promise<number> {
    return Number(await this.silverContract.balanceOf(userAddress));
  }

  async getUserMSHOTBalance(userAddress: string): Promise<Number> {

    // let web3 = new Web3(await web3Modal.connect());
    // this.mshotBalanceContract = new web3.eth.Contract(mshotTokenAbi as any, "0xF683a2eC04A493Fc4e0FD7C3e4178fB9cef7508e");

    return Number(
      await this.mshotBalanceContract.balanceOf(userAddress)
    );
  }

  async claimMSHOT(): Promise<any> {
    let web3 = new Web3(await web3Modal.connect());

    const claimContract = new web3.eth.Contract(
      mshotTokenAbi as any,
      "0xF683a2eC04A493Fc4e0FD7C3e4178fB9cef7508e"
    );

    const hasTokenImported = await this.localStorageService.getTokenAdding();

    try {
      const claimOperation = await claimContract.methods.claim();
      let tx = await claimOperation.send({ from: this.account });

      // console.log("transaction: ", tx)

      tx === undefined ?
        this.toastrService.error('Operation Failed!')
        :
        this.toastrService.success('You claimed MSHOT successfully!');

      if (!hasTokenImported) {
        this.addTokenMSHOTv2ToWalletAsset();
      }

      return tx === undefined ? CLAIM_CASES.FAILED : CLAIM_CASES.CLAIMED;

    } catch (error) {
      console.log(error);
      if (error.code === 4001)
        return CLAIM_CASES.REJECTED;
    }
  }

  async buyMSHOT(bnbValue: number) {
    const hasTokenImported = await this.localStorageService.getTokenAdding();

    try {
      let web3 = new Web3(await web3Modal.connect());
      const buyContract = new web3.eth.Contract(
        buyMshotTokenAbi as any,
        "0xF683a2eC04A493Fc4e0FD7C3e4178fB9cef7508e"
      );

      const buyOperation = await buyContract.methods.buyTokenWithBNB();

      let tx = await buyOperation.send(
        {
          from: this.account,
          value: web3.utils.toWei(`${bnbValue}`, "ether")
        }
      );
      // console.log("transaction: ", tx);
      this.toastrService.success('You bought MSHOT successfully!');

      if (!hasTokenImported) {
        await this.addTokenMSHOTv2ToWalletAsset();
        // this.toastrService.success('You imported MSHOT token to your wallet successfully!');
      }

    } catch (error) {
      this.toastrService.error('Operation Failed!')
    }
  }

  async addTokenMSHOTv2ToWalletAsset() {
    const tokenAddress = '0xF683a2eC04A493Fc4e0FD7C3e4178fB9cef7508e';
    const tokenSymbol = 'MSHOT';
    const tokenDecimals = 18;
    const tokenImage = 'http://localhost:4200/assets/media/images/logo.png';

    if (typeof window.ethereum !== 'undefined' || (typeof window.web3 !== 'undefined')) {
      try {
        // wasAdded is a boolean. Like any RPC method, an error may be thrown.
        this.windowRef.nativeWindow.ethereum.request({
          method: 'wallet_watchAsset',
          params:
          {
            type: 'ERC20', // Initially only supports ERC20, but eventually more!
            options: {
              address: tokenAddress, // The address that the token is at.
              symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
              decimals: tokenDecimals, // The number of decimals in the token
              image: tokenImage // A string url of the token logo
            }
          },
        });
        this.localStorageService.setTokenAdding(true);
      } catch (error) {
        console.log(error);
      }
    }
  }
}
