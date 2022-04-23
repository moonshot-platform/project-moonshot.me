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
import claimMshotTokenAbi from './../../assets/abis/claim-mshot-token-abi.json';
import vestingTokenAbi from './../../assets/abis/vesting-token.abi.json';

import Web3 from 'web3';
import Web3Modal from "web3modal";
import { setInterval } from 'timers';


export enum CLAIM_CASES {
  CONNECT_WALLET = 'Connect Wallet',
  CLAIM = 'Claim',
  CLAIMING = 'Claiming...',
  CLAIMED = 'MSHOT Claimed',
  FAILED = 'Failed',
  REJECTED = 'Rejected',
}

const providerMainNetURL = environment.providerMainNetURL;
const providerTestNetURL = environment.providerTestNetURL;
const providerChainID = environment.chainId;
const NETWORK = 'binance';

const moonshotV1TokenAddress = environment.moonshotV1Address;
const buyContractAddress = environment.buyContractAddress;
const moonshotV2TokenAddress = environment.tokenContractAddress;
const claimContractAddress = environment.claimContractAddress;
const vestingContractAddress = environment.vestingContactAddress;

//Create WalletConnect Provider
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
  private isClaimingSucceeded = new Subject<boolean>();

  provider: ethers.providers.Web3Provider;
  signer: ethers.providers.JsonRpcSigner;
  moonshotV1TokenContract: any;
  moonshotV2TokenContract: any;
  moonshotV2ClaimContract: any;
  moonshotV2BuyContract: any;
  moonshotV2VestingContract: any;


  private isConnected = false;
  public account = '';

  constructor(
    private windowRef: WindowRefService,
    private toastrService: ToastrService,
    private localStorageService: LocalStorageService,
  ) {

  }

  convertBalance(balance: number): string {
    balance = balance / 1e9;
    balance = Math.trunc(balance);

    return balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  async connectToWallet(origin = 0) {
    const window = this.windowRef.nativeWindow.ethereum;

    try {
      if (typeof window !== 'undefined' && typeof window !== undefined) {
        await this.windowRef.nativeWindow.ethereum.request({ method: this.ETH_REQUEST_ACCOUNTS });
        this.provider = new ethers.providers.Web3Provider(this.windowRef.nativeWindow.ethereum);

        let currentNetwork = await this.provider.getNetwork();
        if (currentNetwork.chainId != providerChainID) {
          this.setWalletState(false);
          this.toastrService.error('Please connect your wallet to the Binance Smart Chain');
          throw 'Wrong network';
        }

        await this.getAccountAddress();
        this.localStorageService.setWallet(1);

        // Subscribe to accounts change
        this.windowRef.nativeWindow.ethereum.on(this.ACCOUNTS_CHANGED, async (accounts: string[]) => {
          if (accounts.length == 0) {
            // MetaMask is locked or the user has not connected any accounts
            this.setWalletDisconnected();
          } else {
            await this.connectToWallet();
          }
        });

        // Subscribe to chain changed
        this.windowRef.nativeWindow.ethereum.on(this.CHAIN_CHANGED, async (code: number, reason: string) => {
          await this.connectToWallet();
          this.setWalletState(true);
        });

        // Subscribe to session disconnection
        this.windowRef.nativeWindow.ethereum.on(this.DISCONNECT, (code: number, reason: string) => {
          if (provider.close) provider.close();
          this.setWalletDisconnected();
        });

        this.setWalletState(true);

        //  if (origin == 0) location.reload();

      }
    } catch (e) {
      this.setWalletDisconnected();
    }

  }

  async connectToWalletConnect(origin = 0) {

    try {
      this.provider = new ethers.providers.Web3Provider(provider);
      await provider.enable();

      let currentNetwork = await this.provider.getNetwork();
      if (currentNetwork.chainId != providerChainID) {
        this.setWalletState(false);
        this.toastrService.error('Please connect your wallet to the Binance Smart Chain');
        throw 'Wrong network';
      }

      await this.getAccountAddress();
      this.localStorageService.setWallet(2);

      // Subscribe to accounts change
      provider.on(this.ACCOUNTS_CHANGED, (accounts: string[]) => this.connectToWalletConnect());

      // Subscribe to session disconnect
      provider.on(this.DISCONNECT, (code: number, reason: string) => this.setWalletDisconnected());

      // Subscribe to chain changed
      provider.on(this.CHAIN_CHANGED, (code: number, reason: string) => {
        this.connectToWalletConnect();
        this.setWalletDisconnected();
      });

      this.setWalletState(true);

      //    if (origin === 0) location.reload();
    }

    catch (e) {
      this.setWalletDisconnected();
      location.reload(); // FIXME: Without reloading the page, the WalletConnect modal does not open again after closing it
    }

  }

  async getAccountAddress() {

    this.signer = this.provider?.getSigner();
    const address = await this.signer?.getAddress(); // gets current selected address
    const network = await this.provider.getNetwork();

    if (network.chainId == environment.chainId) {
      this.moonshotV1TokenContract = new ethers.Contract(moonshotV1TokenAddress, silverTokenAbi, this.signer);
      this.moonshotV2TokenContract = new ethers.Contract(moonshotV2TokenAddress, mshotTokenAbi, this.signer);
      this.moonshotV2ClaimContract = new ethers.Contract(claimContractAddress, claimMshotTokenAbi, this.signer);
      this.moonshotV2BuyContract = new ethers.Contract(buyContractAddress, buyMshotTokenAbi, this.signer);
      this.moonshotV2VestingContract = new ethers.Contract(vestingContractAddress, vestingTokenAbi, this.signer);
    } else {
      this.toastrService.error('Please connect your wallet to the Binance Smart Chain');
      console.log("Wrong network");
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

    //this.toastrService.info('Address changed to ' + address);
  }

  setWalletDisconnected() {
    this.isConnected = false;
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

  setIsClaimingSucceededState(value: boolean) {
    this.isClaimingSucceeded.next(value);
  }

  onIsClaimingSucceededStatetStateChanged() {
    return this.isClaimingSucceeded.asObservable();
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
      default:
        return false;
    }

    // await this.getAccountAddress();

    return wallet != undefined || this.account != undefined;
  }

  async getUserBalance(userAddress: string): Promise<number> {
    return Number(await this.moonshotV1TokenContract.balanceOf(userAddress));
  }

  async getUserMSHOTBalance(userAddress: string): Promise<Number> {
    return Number(
      await this.moonshotV2TokenContract.balanceOf(userAddress)
    );
  }

  async hasClaimed(): Promise<boolean> {
    let result = await this.moonshotV2ClaimContract.hasClaimed();
    return result;
  }

  async claimMSHOT(): Promise<any> {
    try {
      const moonshotBalance = await this.getUserBalance(this.account);

      const claimed = await this.hasClaimed();

      if (claimed) {
        this.toastrService.success("You have already successfully claimed your MSHOT v2", "MSHOT", { disableTimeOut: true });
        this.setIsClaimingSucceededState(claimed);
        return CLAIM_CASES.CLAIMED;
      }

      if (!claimed && moonshotBalance == 0) {
        this.toastrService.error("The currently selected address is not eligible for claiming MSHOT v2 tokens.", "MSHOT", { disableTimeOut: true });
        return CLAIM_CASES.CLAIM;
      }

      const claimOperation = await this.moonshotV2ClaimContract.claim({ from: this.account.toString() });
      console.log("this.account : " + this.account);

      // let tx = await claimOperation.send({ from: this.account.toString() });
      this.toastrService.success("Successfully claimed MSHOT v2", "MSHOT", { disableTimeOut: true });
      this.setIsClaimingSucceededState(await this.hasClaimed());

      return CLAIM_CASES.CLAIMED;
    }
    catch (error) {
      this.toastrService.error(error.message, "Exception", { disableTimeOut: true });
      console.log(error);
      return CLAIM_CASES.CLAIM; // allow user to try again if he rejects the tx
    }
  }

  async buyMSHOT(bnbValue: number) {

    try {
      const buyOperation = await this.moonshotV2BuyContract.buyTokenWithBNB({
        from: this.account,
        value: ethers.utils.parseEther(`${bnbValue}`),
      });

      this.toastrService.success('Successfully bought MSHOT v2');

    } catch (error) {
      console.log(error);

      this.toastrService.error(error.message)
    }
  }


  addTokenMshotToMetaMaskWallet() {
    const tokenAddress = moonshotV2TokenAddress;
    const tokenSymbol = 'MSHOT';
    const tokenDecimals = 9;
    const tokenImage = 'https://project-moonshot.me/assets/media/images/logo.png';

    if (typeof window.ethereum !== 'undefined' || (typeof window.web3 !== 'undefined')) {
      try {
        const wasAdded = this.windowRef.nativeWindow.ethereum.request({
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

        if (wasAdded) {
          this.toastrService.success("We requested your wallet to add MSHOT");
        }
        else {
          this.toastrService.warning("The MSHOT token was not added");
        }

      } catch (error) {
        console.log(error);
      }
    }
  }

  async donate(donationValue: number): Promise<any> {
    // Creating a transaction param
    const tx = {
      from: this.account,
      to: "0x9d8a5d6B405c2Eb7cee724F4B2F67a902F0f0864",
      value: ethers.utils.parseEther(`${donationValue}`),
    };

    try {
      let transaction = await this.signer.sendTransaction(tx);
      if (transaction !== undefined) {
        this.toastrService.success("Liftoff! We have a liftoff!");
        return true;
      }
    } catch (error) {
      console.log(error.message);
      this.toastrService.warning(error.message);

      return false;
    }
    return false;
  }

  async hasVested(): Promise<boolean> {
    return await this.moonshotV2VestingContract.getVestingSchedulesCountByBeneficiary(this.account) !== 0;
  }

  async getVestingScheduleId() {
    return await this.moonshotV2VestingContract.computeVestingScheduleIdForAddressAndIndex(this.account, 0);
  }

  async getVestingScheduleIdForHolder(beneficiary: string) {
    return await this.moonshotV2VestingContract.computeVestingScheduleIdForAddressAndIndex(beneficiary, 0);
  }

  async computeReleasableAmount(): Promise<number> {
    try {
      let scheduleId: string = await this.getVestingScheduleId();
      // console.log("scheduleId :" + scheduleId);

      let releasableAmount = await this.moonshotV2VestingContract.computeReleasableAmount(scheduleId);
      // console.log("releasable amount:" + releasableAmount);
      return releasableAmount;

    } catch (error) {
      // console.log("Compute Releasable Amount ERROR :" + error.message);
      this.toastrService.warning(error.message, "Compute");
      return 0;
    }

  }

  async createVestingSchedule(
    beneficiary: string,
    startTime: number,
    cliffInSeconds: number,
    durationInSeconds: number,
    isRevocable: boolean,
    moonshotValue: number
  ) {

    try {
      await this.moonshotV2VestingContract.createVestingSchedule(
        beneficiary,
        startTime,
        cliffInSeconds,// cliff, 1 day in unix timestamp
        durationInSeconds,// 1 week in unix timestamp
        3600, // duration of slice period for vesting
        isRevocable,
        moonshotValue,
      );

      this.toastrService.success("Created a new vesting schedule");
    } catch (error) {
      console.log(error.message);

      this.toastrService.error("Failed to create a new vesting schedule");
    }
  }

  async releaseVesting() {
    let scheduleId = await this.getVestingScheduleId();
    let vestableAmount = await this.computeReleasableAmount();
    if (vestableAmount == 0 || vestableAmount == undefined) {
      this.toastrService.info("Tokens will be releasable soon. The slice period is 1 hour");
      return
    }
    try {
      await this.moonshotV2VestingContract.release(
        scheduleId,
        vestableAmount,
      );

      this.toastrService.success("You received " + this.shortTheNumber(vestableAmount) + " MSHOT");
    } catch (error) {
      console.log(error.message);
      this.toastrService.error(error.message);
    }
  }

  async isOwner(): Promise<boolean> {
    let owner: string = await this.moonshotV2VestingContract.owner();
    // console.log("Owner:" + owner);
    return this.account === owner;
  }

  async searchLastVestingScheduleForHolder(address: string) {
    let userVestingData: any;
    try {
      userVestingData = await this.moonshotV2VestingContract.getLastVestingScheduleForHolder(address);
      console.log("Found the holder vesting schedule data succesfully :" + userVestingData);

      return userVestingData;
    } catch (error) {
      console.log(error.message);
      this.toastrService.error(error.message);

      return undefined;
    }
  }

  async revokeTheHolder(beneficiary: string) {
    try {
      let scheduleId = await this.getVestingScheduleIdForHolder(beneficiary);
      await this.moonshotV2VestingContract.revoke(scheduleId)
      this.toastrService.success("Vesting schedule revoked");

    } catch (error) {
      console.log(error.message);
      this.toastrService.error(error.message);
    }
  }

  async checkBnbBalance(): Promise<boolean> {
    return await this.getBnbBalance() > 0.0031;
  }

  async getBnbBalance() {
    const hexBalance = await this.provider.getBalance(this.account);
    const balance = parseInt(hexBalance._hex) / Math.pow(10, 18); // 18 is decimals of token

    // console.log(balance);
    return balance;
  }

  formatNumber(n, d, l) {
    return (n / d).toFixed(1) + l;
  }

  shortTheNumber(value) {
    const n = value / 1000000000;

    if (n >= 1e3 && n < 1e6)
      return this.formatNumber(n, 1e3, "K");
    if (n >= 1e6 && n <= 1e9)
      return this.formatNumber(n, 1e6, "M");
    if (n >= 1e9 && n < 1e12)
      return this.formatNumber(n, 1e9, "B");
    if (n >= 1e12)
      return this.formatNumber(n, 1e12, "T");

    return value;
  }
}
