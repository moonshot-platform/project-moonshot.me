import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WalletService } from 'src/app/services/wallet-service.service';
import { environment } from 'src/environments/environment';
import Web3 from 'web3';
import { WalletConnectComponent } from '../../base/wallet-connect/wallet-connect.component';

@Component({
  selector: 'app-moon-swap',
  templateUrl: './moon-swap.component.html',
  styleUrls: ['./moon-swap.component.scss']
})
export class MoonSwapComponent implements OnInit {
  static readonly anchorName: string = 'moonswap';

  isConnected: boolean = false;
  buttonName: string = '';
  connectedAddress: string = '';
  moonshotBalanceText: string = '-';
  userData: any;

  constructor(
    public dialog: MatDialog,
    private walletConnectService: WalletService,
  ) { }

  ngOnInit(): void {
    this.walletConnectService.init().then((data: string) => {
      this.isConnected = data !== null;
      this.controlButtonName();
    });

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
      }
    });

    this.walletConnectService.onWalletStateChanged().subscribe((state: boolean) => {
      this.isConnected = state
      this.controlButtonName();
    });
  }

  controlButtonName(): void {
    if (this.isConnected) {
      this.buttonName = 'Claim MSHOT';
    } else {
      this.buttonName = 'Connect wallet'
      this.moonshotBalanceText = '-';
      this.connectedAddress = '';
    }
  }

  async claimMSHOT() {
    if (!this.isConnected) {
      this.openWalletConnectDialog();
    }

    if (this.isConnected) {
      this.walletConnectService.claimMSHOT();
    }

  }

  openWalletConnectDialog(): void {
    let dialogRef = this.dialog.open(WalletConnectComponent, {
      width: 'auto',
    });

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
}
