import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from 'src/app/services/sidebar.service';
import { TokenomicsService } from 'src/app/services/tokenomics.service';
import { VESTING_CONTRACTS, WalletService } from 'src/app/services/wallet-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer-mobile',
  templateUrl: './footer-mobile.component.html',
  styleUrls: ['./footer-mobile.component.scss']
})
export class FooterMobileComponent implements OnInit {
  isMenuOpen = false;
  isMoonbasebarOpenAtLaunch = true;
  hasVested: boolean = false;

  address: string = '';
  isConnected: boolean = false;
  userData: any;
  shortenedWalletAddress: string = ''

  constructor(
    private tokenomicsService: TokenomicsService,
    private sidebarService: SidebarService,
    private walletConnectService: WalletService,
    private router: Router) {
    if (this.router.url !== '/') {
      this.isMoonbasebarOpenAtLaunch = false;
    }

    this.walletConnectService.init().then((data: boolean) => {
      this.isConnected = data;
    });
  }

  ngOnInit(): void {
    this.walletConnectService.getData().subscribe((data: any) => {
      this.userData = data;
      if (data !== undefined && data.address != undefined) {
        if (this.userData.networkId.chainId == environment.chainId) {
          this.isConnected = true;
          this.address = data.address;
          this.shortenedWalletAddress = this.sidebarService.shortWalletAddress(this.address);
        } else {
          this.address = '';
          this.shortenedWalletAddress = '';
        }
      }
    });

    this.walletConnectService.onWalletStateChanged().subscribe(async (state: boolean) => {
      // this.isConnected = state;
      // console.log("CONNECTION STATUS IN MOBILE FOOTER MENU: " + this.isConnected);

      if (state) {
        await this.checkUserVested();
      }
    });
  }

  menuopen() {
    this.isMenuOpen = true;
  }

  closeMenu() {
    if (this.isMoonbasebarOpenAtLaunch) {
      this.isMoonbasebarOpenAtLaunch = false;
      this.toggleMoonbaseBar();
    }
    this.isMenuOpen = false;
  }

  toggleTokenomics() {
    this.tokenomicsService.onToggle(true);
    setTimeout(() => {
      this.closeMenu();
    }, 50)
  }

  toggleMoonbaseBar() {
    this.sidebarService.onMoonboxesBarToggle(false);
  }

  toggleReleaseBar() {
    this.sidebarService.onReleaseBarToggle(true);
    this.isMenuOpen = true;
  }

  toggleMiningBar() {
    this.sidebarService.onMiningBarToggle(true);
    this.isMenuOpen = true;
  }

  toggleMoonseaBar() {
    this.sidebarService.onMoonseaBarToggle(true);
    this.isMenuOpen = true;
  }

  async checkUserVested() {
    this.hasVested = await this.walletConnectService.hasVested(VESTING_CONTRACTS.MSHOT);
    return this.hasVested;
  }
}
