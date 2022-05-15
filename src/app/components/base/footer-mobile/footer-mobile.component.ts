import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MiningBarService } from 'src/app/services/mining-bar.service';
import { MoonbaseService } from 'src/app/services/moonbase.service';
import { MoonseaBarService } from 'src/app/services/moonsea-bar-service.service';
import { ReleaseService } from 'src/app/services/release.service';
import { TokenomicsService } from 'src/app/services/tokenomics.service';
import { VESTING_CONTRACTS, WalletService } from 'src/app/services/wallet-service.service';

@Component({
  selector: 'app-footer-mobile',
  templateUrl: './footer-mobile.component.html',
  styleUrls: ['./footer-mobile.component.scss']
})
export class FooterMobileComponent implements OnInit {
  isMenuOpen = false;
  isMoonbasebarOpenAtLaunch = true;
  hasVested: boolean = false;


  constructor(
    private tokenomicsService: TokenomicsService,
    private moonbaseService: MoonbaseService,
    private releaseService: ReleaseService,
    private miningBarService: MiningBarService,
    private moonseaBarService: MoonseaBarService,
    private walletConnectService: WalletService,
    private router: Router) {

    if (this.router.url !== '/') {
      this.isMoonbasebarOpenAtLaunch = false;
    }
  }

  ngOnInit(): void {
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
    this.moonbaseService.onToggle(false);
  }

  toggleReleaseBar() {
    this.releaseService.onToggle(true);
    this.isMenuOpen = true;
  }

  toggleMiningBar() {
    this.miningBarService.onToggle(true);
    this.isMenuOpen = true;
  }

  toggleMoonseaBar() {
    this.moonseaBarService.onToggle(true);
    this.isMenuOpen = true;
  }

  async checkUserVested() {
    this.hasVested = await this.walletConnectService.hasVested(VESTING_CONTRACTS.MSHOT);
    return this.hasVested;
  }
}
