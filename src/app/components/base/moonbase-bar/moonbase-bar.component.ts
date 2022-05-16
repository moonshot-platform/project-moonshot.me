import { Component, OnInit } from '@angular/core';
import { MoonbaseService } from 'src/app/services/moonbase.service';
import { WalletService } from 'src/app/services/wallet-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-moonbase-bar',
  templateUrl: './moonbase-bar.component.html',
  styleUrls: ['./moonbase-bar.component.scss']
})
export class MoonbaseBarComponent implements OnInit {
  address: string = '';
  isConnected: boolean = false;
  userData: any;
  shortenedWalletAddress: string = ''

  constructor(
    private moonbaseService: MoonbaseService,
    private walletService: WalletService,
  ) {
    this.walletService.init().then((data: boolean) => {
      this.isConnected = data;
    });
  }

  ngOnInit(): void {
    this.walletService.getData().subscribe((data: any) => {
      this.userData = data;
      if (data !== undefined && data.address != undefined) {
        if (this.userData.networkId.chainId == environment.chainId) {
          this.isConnected = true;
          this.address = data.address;
          this.shortenedWalletAddress = this.shortWalletAddress();
        } else {
          this.address = '';
          this.shortenedWalletAddress = '';
        }
      }
    });

    this.walletService.onWalletStateChanged().subscribe((state: boolean) => {
      this.isConnected = state
    });

  }

  shortWalletAddress(): string {
    return this.address.slice(0, this.address.length / 2) + '...' + this.address.slice(-((this.address.length / 2) - 9))
  }

  toggleMoonbase(): void {
    this.moonbaseService.onToggle(false);
  }
}
