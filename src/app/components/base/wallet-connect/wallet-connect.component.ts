import { Component } from '@angular/core';
import { WalletService } from 'src/app/services/wallet-service.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-wallet-connect',
  templateUrl: './wallet-connect.component.html',
  styleUrls: ['./wallet-connect.component.scss']
})
export class WalletConnectComponent {

  constructor(
    private walletConnectService: WalletService,
    public parentDialogRef: MatDialogRef<WalletConnectComponent>
  ) { }

  async connectToMetamask() {
    this.parentDialogRef.close();
    this.walletConnectService.connectToWallet();
  }

  async connectToWalletConnect() {
    this.parentDialogRef.close();
    this.walletConnectService.connectToWalletConnect();
  }
}
