import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WalletService } from 'src/app/services/wallet-service.service';
import { environment } from 'src/environments/environment';
import Web3 from 'web3';
import { WalletConnectComponent } from '../../base/wallet-connect/wallet-connect.component';
import { CLAIM_CASES } from 'src/app/services/wallet-service.service';
@Component({
  selector: 'app-moon-swap',
  templateUrl: './moon-swap.component.html',
  styleUrls: ['./moon-swap.component.scss']
})
export class MoonSwapComponent implements OnInit {
  static readonly anchorName: string = 'moonswap';

  isConnected: boolean = false;
  buttonName: string = CLAIM_CASES.CONNECT_WALLET;
  connectedAddress: string = '';
  moonshotBalanceText: string = '-';
  userData: any;
  isButtonActive: boolean = true;
  isInProcess: boolean = false;

  constructor(
    public dialog: MatDialog,
    private walletConnectService: WalletService
  ) {
    this.walletConnectService.init().then((data: boolean) => {
      this.isConnected = data;
      this.controlButtonName();
    });
  }

  ngOnInit(): void {
    // this.walletConnectService.init().then((data: string) => {
    //   this.isConnected = data !== null;
    //   this.controlButtonName();
    // });

    this.walletConnectService.getData().subscribe((data: any) => {
      this.userData = data;
      this.connectedAddress = data.address;
      if (data !== undefined && data.address != undefined) {
        this.isConnected = true;
        if (this.userData.networkId.chainId == environment.chainId) {
          this.getMoonShootBalance();
        }
      }
      else {
        this.moonshotBalanceText = "-";
        this.connectedAddress = "";
      }
    });

    this.walletConnectService.onWalletStateChanged().subscribe((state: boolean) => {
      this.isConnected = state
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
    }
  }

  async claimMSHOT() {
    this.isInProcess = true;

    if (!this.isConnected) {
      this.openWalletConnectDialog();
    } else {
      this.buttonName = await this.walletConnectService.claimMSHOT();
    }

    this.isInProcess = false;
  }

  openWalletConnectDialog(): void {
    let dialogRef = this.dialog.open(
      WalletConnectComponent,
      {
        width: 'auto',
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      // this.animal = result;
    });
  }

  async getMoonShootBalance() {
    const balance = Number(await this.walletConnectService.getUserBalance(this.userData.address));
    this.moonshotBalanceText = this.walletConnectService.convertBalance(balance);
  }

  shortTheWalletAddress(): string {
    if (this.isConnected) {
      return this.connectedAddress.slice(0, 8) + '......' + this.connectedAddress.slice(-9);
    }
    else {
      return '';
    }
  }

  checkButtonActivity(): boolean {
    return (this.buttonName === CLAIM_CASES.CLAIMED || this.buttonName === CLAIM_CASES.CLAIMING);
  }
}
