import { Component, OnInit } from '@angular/core';
import { MiningBarService } from 'src/app/services/mining-bar.service';
import { WalletService } from 'src/app/services/wallet-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mining-bar',
  templateUrl: './mining-bar.component.html',
  styleUrls: ['./mining-bar.component.scss']
})
export class MiningBarComponent implements OnInit {
  address: string = '';
  isConnected: boolean = false;
  userData: any;
  shortenedWalletAddress: string = ''

  constructor(
    private miningBarService: MiningBarService,
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

  toggleMiningView(): void {
    this.miningBarService.onToggle(false);
  }
}
