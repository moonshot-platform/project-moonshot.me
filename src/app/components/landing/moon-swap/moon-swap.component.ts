import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WalletService } from 'src/app/services/wallet-service.service';
import { environment } from 'src/environments/environment';
import Web3 from 'web3';
import { WalletConnectComponent } from '../../base/wallet-connect/wallet-connect.component';
import { CLAIM_CASES } from 'src/app/services/wallet-service.service';
import { id } from 'ethers/lib/utils';
@Component({
  selector: 'app-moon-swap',
  templateUrl: './moon-swap.component.html',
  styleUrls: ['./moon-swap.component.scss']
})
export class MoonSwapComponent implements OnInit {
  static readonly anchorName: string = 'moonswap';

  address = '0x5298AD82dD7C83eEaA31DDa9DEB4307664C60534';

  isConnected: boolean = false;
  buttonName: string = CLAIM_CASES.CONNECT_WALLET;
  connectedAddress: string = '';
  moonshotBalanceText: string = '-';
  mshotV2BalanceText: string = '-';
  userData: any;
  isButtonActive: boolean = true;
  isInProcess: boolean = false;

  isClaming: boolean = false;

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
          this.getMoonShotBalances();
        }
      }
      else {
        this.moonshotBalanceText = "-";
        this.connectedAddress = "";
        this.mshotV2BalanceText = "-";
      }
    });

    this.walletConnectService.onWalletStateChanged().subscribe((state: boolean) => {
      this.isConnected = state
      this.controlButtonName();
    });

    this.walletConnectService.getIsClaiming().subscribe((state: boolean) => {
      this.isClaming = state;
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
    this.isInProcess = true;

    if (!this.isConnected) {
      this.openWalletConnectDialog();
    } else /* if (this.moonshotBalanceText != '0' && this.moonshotBalanceText != '-')  */ {
      if (this.buttonName != CLAIM_CASES.CLAIMED)
        this.buttonName = await this.walletConnectService.claimMSHOT();
      // this.walletConnectService.updateIsClaiming(false);
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
}
