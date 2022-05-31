import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WalletService } from 'src/app/services/wallet-service.service';
import { environment } from 'src/environments/environment';
import Web3 from 'web3';
import { WalletConnectComponent } from '../../base/wallet-connect/wallet-connect.component';
import { CLAIM_CASES } from 'src/app/services/wallet-service.service';
import { id } from 'ethers/lib/utils';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-moon-swap',
  templateUrl: './moon-swap.component.html',
  styleUrls: ['./moon-swap.component.scss']
})
export class MoonSwapComponent implements OnInit {
  static readonly anchorName: string = 'moonswap';

  address = environment.tokenContractAddress;

  isConnected: boolean = false;
  buttonName: string = CLAIM_CASES.CONNECT_WALLET;
  connectedAddress: string = '';
  moonshotBalanceText: string = '-';
  mshotV2BalanceText: string = '-';
  userData: any;
  isButtonActive: boolean = true;
  isInProcess: boolean = false;
  hasEnoughBnb: boolean = false
  hasClaimed: boolean = false;

  constructor(
    public dialog: MatDialog,
    private walletConnectService: WalletService,
    private toastrService: ToastrService
  ) {
    this.walletConnectService.init().then(async (data: boolean) => {
      this.isConnected = data;
      if (data) {
        this.hasClaimed = await this.walletConnectService.hasClaimed();
      }
      this.controlButtonName();
    });
  }

  ngOnInit(): void {
    this.walletConnectService.getData().subscribe((data: any) => {
      this.userData = data;
      this.connectedAddress = data.address;
      if (data !== undefined && data.address != undefined) {
        if (this.userData.networkId.chainId == environment.chainId) {
          this.isConnected = true;
          this.getMoonShotBalances();
        }
      }
      else {
        this.moonshotBalanceText = "-";
        this.connectedAddress = "";
        this.mshotV2BalanceText = "-";
      }
      this.controlButtonName();
    });

    this.walletConnectService.onWalletStateChanged().subscribe(async (state: boolean) => {
      this.isConnected = state

      if (state) {
        this.hasClaimed = await this.walletConnectService.hasClaimed();
      }
      this.controlButtonName();
    });

  }

  controlButtonName(): void {
    if (this.isConnected) {
      this.buttonName = CLAIM_CASES.CLAIM;
    } else {
      this.buttonName = CLAIM_CASES.CONNECT_WALLET
      this.moonshotBalanceText = '-';
      this.connectedAddress = '';
      this.mshotV2BalanceText = "-";
    }
  }

  async claimMSHOT() {

    if (this.isConnected) {
      await this.checkBNBBalance();
      this.isInProcess = true;

      if (this.hasEnoughBnb) {
        this.buttonName = await this.walletConnectService.claimMSHOT();
        this.hasEnoughBnb = false;
      } else {
        this.toastrService.error("You do not have enough bnb to pay the gas fee!")
      }

      this.isInProcess = false;
    }
    else {

      this.openWalletConnectDialog();
    }


  }

  openWalletConnectDialog(): void {
    let dialogRef = this.dialog.open(
      WalletConnectComponent,
      {
        width: 'auto',
      }
    );

    dialogRef.afterClosed().subscribe(result => { });
  }

  async getMoonShotBalances() {
    const [balance, mshotV2Balance] = await Promise.all(
      [
        Number(await this.walletConnectService.getUserBalance(this.userData.address)),
        Number(await this.walletConnectService.getUserMSHOTBalance(this.userData.address))
      ]
    )

    this.moonshotBalanceText = this.walletConnectService.convertBalance(balance);
    this.mshotV2BalanceText = this.walletConnectService.convertBalance(mshotV2Balance);
  }

  addMshotToMetaMaskWallet = () => this.walletConnectService.addTokenMshotToMetaMaskWallet();

  checkBNBBalance = async () => this.hasEnoughBnb = await this.walletConnectService.checkBnbBalance();
}
