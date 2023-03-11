import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { WalletService } from 'src/app/services/wallet-service.service';

@Component({
  selector: 'app-wallet-connect',
  templateUrl: './wallet-connect.component.html',
  styleUrls: ['./wallet-connect.component.scss']
})
export class WalletConnectComponent implements OnInit, OnDestroy {
  shortenedWalletAddress: string = "";
  walletAddress: string = "";
  isConnected: boolean = false;

  constructor(
    private walletConnectService: WalletService,
    public parentDialogRef: MatDialogRef<WalletConnectComponent>
  ) {
    this.walletConnectService.init().then(async (state: boolean) => {
      this.isConnected = state;
      if (!state) {
        this.shortenedWalletAddress = "";
        this.walletAddress = "";
      }
      this.walletConnectService.setWalletState(this.isConnected);
    });
    this.walletAddress = this.walletConnectService.account;
    this.shortenedWalletAddress = this.walletAddress.slice(0, 5) + '...' + this.walletAddress.slice(-4)
    // console.log(this.shortenedWalletAddress);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  async connectToMetamask() {
    this.parentDialogRef.close();
    this.walletConnectService.connectToWallet();
  }

  async connectToWalletConnect() {
    this.parentDialogRef.close();
    this.walletConnectService.connectToWalletConnect();
  }

  closeDialog = () => this.parentDialogRef.close();

  disconnnect() {
    this.walletConnectService.setWalletDisconnected();
    this.closeDialog();
  }


}
