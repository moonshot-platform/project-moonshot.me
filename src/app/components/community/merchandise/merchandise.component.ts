import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { WalletService } from 'src/app/services/wallet-service.service';
import { WalletConnectComponent } from '../../base/wallet-connect/wallet-connect.component';
import { DonateDialogComponent } from '../donate-dialog/donate-dialog.component';


@Component({
  selector: 'app-merchandise',
  templateUrl: './merchandise.component.html',
  styleUrls: ['./merchandise.component.scss'],

})
export class MerchandiseComponent implements OnInit {

  current = 0;
  bnbCountFromInput: number = 1;

  isConnected: boolean = false;
  isProcessing: boolean = false;

  public shirts: any = [
    'assets/media/images/community/shop-bear.webp',
    'assets/media/images/community/shop-bull.webp',
    'assets/media/images/community/shop-moonbirb.webp'
  ]

  constructor(
    private dialog: MatDialog,
    private walletConnectService: WalletService,
  ) {
    this.walletConnectService.init().then(async (state: boolean) => {
      this.isConnected = state;

      this.walletConnectService.setWalletState(this.isConnected);
    });

  }

  ngOnInit(): void {
    this.walletConnectService.onWalletStateChanged().subscribe((state: boolean) => {
      this.isConnected = state;
    });
  }

  next() {
    this.current = this.current < this.shirts.length - 1 ? this.current + 1 : 0;
  }

  prev() {
    this.current = this.current > 0 ? this.current - 1 : this.shirts.length - 1;
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;


    const dialogRef = this.dialog.open(DonateDialogComponent, dialogConfig);
  }

  async openWalletConnectionDialog() {
    let dialogRef = this.dialog.open(
      WalletConnectComponent,
      { width: 'auto' }
    );

    dialogRef.afterClosed().subscribe((val: any) => {
      return;
    });
  }

  donate = async () => {
    let isDonationSuccess: boolean = false;
    let audio = new Audio();

    this.isProcessing = true;

    if (!this.isConnected) {
      await this.openWalletConnectionDialog();
    } else {
      isDonationSuccess = await this.walletConnectService.donate(this.bnbCountFromInput);

      if (isDonationSuccess) {
        audio.src = "assets/media/sounds/audio_99970__raelwissdorf__v-start.mp3";
        audio.load();
        audio.play();
      } else {
        let audio = new Audio();
        audio.src = "assets/media/sounds/audio_558735__samsterbirdies__8-bit-fail.mp3";
        audio.load();
        audio.play();
      }
    }



    this.isProcessing = false;
  }

}
