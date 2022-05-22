import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { WalletService } from 'src/app/services/wallet-service.service';
import { WalletConnectComponent } from '../base/wallet-connect/wallet-connect.component';

@Component({
  selector: 'app-vulture-whitelist',
  templateUrl: './vulture-whitelist.component.html',
  styleUrls: ['./vulture-whitelist.component.scss']
})
export class VultureWhitelistComponent implements OnInit {
  static readonly routeName: string = 'vulture-whitelist';

  isConnected: boolean = false;
  isInProcess: boolean = false;
  connectedAddress: string = '';

  constructor(
    private walletService: WalletService,
    private dialog: MatDialog,
    private toastrService: ToastrService,
  ) {
    this.walletService.init().then(async (data: boolean) => {
      this.isConnected = data;

      if (data) {
        this.connectedAddress = this.walletService.account;
      }

      this.walletService.setWalletState(this.isConnected);
    });
  }

  ngOnInit(): void {
    this.walletService.onWalletStateChanged().subscribe(async (state: boolean) => {
      this.isConnected = state;
      if (state) {
        this.connectedAddress = this.walletService.account;
      } else {
        this.connectedAddress = '';
      }
    });
  }

  connectWallet(): void {
    let dialogRef = this.dialog.open(
      WalletConnectComponent,
      { width: 'auto' }
    );
  }

  async registerToWhiteList() {
    await this.walletService.registerToVulture();
  }

}
