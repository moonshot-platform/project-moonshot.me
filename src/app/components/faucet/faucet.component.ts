import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { WalletService } from 'src/app/services/wallet-service.service';
import { WalletConnectComponent } from '../base/wallet-connect/wallet-connect.component';

@Component({
  selector: 'app-faucet',
  templateUrl: './faucet.component.html',
  styleUrls: ['./faucet.component.scss']
})
export class FaucetComponent implements OnInit {
  static readonly routeName: string = 'faucet';

  search: any;
  isConnected: boolean = false;
  connectedAddress: string = '';
  canUserWithdraw: boolean = false;
  cooldown: number = 0;
  isInProcess: boolean = false;
  currentBalance: number = 0;

  tokenAmount = '';
  donationAddress = '0x23737b74c1026a8f3a038af0f9752b7cbd75a76c';

  constructor(
    private walletService: WalletService,
    private dialog: MatDialog,
    private toastrService: ToastrService,
  ) {
    this.walletService.init().then(async (data: boolean) => {
      this.isConnected = data;
      if (data) {
        this.connectedAddress = this.walletService.account;
        this.tokenAmount = await this.walletService.getFaucetAmount();
        this.canUserWithdraw = await this.walletService.canWithdrawOnFaucet();

        this.currentBalance = this.walletService.shortTheNumber(await this.walletService.getUserMSHOTBalance(this.connectedAddress) as number)

        if (!this.canUserWithdraw) {
          this.cooldown = await this.walletService.getRemainingCoolDownForFaucet();
          this.startToCountdownTime();
        }
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

  async getFaucet() {
    this.isInProcess = true;
    this.canUserWithdraw = await this.walletService.canWithdrawOnFaucet();

    if (this.isConnected) {

      if (this.canUserWithdraw) {
        console.log(await this.walletService.getFreeMoonshot());
      } else {
        this.startToCountdownTime();
        this.toastrService.info("You already got free Moonshot!", "FAUCET")
      }

      this.canUserWithdraw = await this.walletService.canWithdrawOnFaucet();
    } else {
      this.connectWallet();
    }

    this.isInProcess = false;
  }

  startToCountdownTime() {
    setInterval(() => {
      this.cooldown -= 1;
    }, 1000);//run this thang every 1 seconds
  }
}
