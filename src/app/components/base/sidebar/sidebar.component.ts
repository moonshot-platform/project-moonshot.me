import { Component, HostListener, OnInit } from '@angular/core';
import { TokenomicsService } from 'src/app/services/tokenomics.service';
import { MoonbaseService } from 'src/app/services/moonbase.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { WalletConnectComponent } from '../wallet-connect/wallet-connect.component';
import { ReleaseService } from 'src/app/services/release.service';
import { VESTING_CONTRACTS, WalletService } from 'src/app/services/wallet-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  active = false;
  moonbaseActive = true;
  releaseBarActive = false;

  isConnected: boolean = false;
  hasVested: boolean = false;

  constructor(
    private tokenomicsService: TokenomicsService,
    private moonbaseService: MoonbaseService,
    private releaseService: ReleaseService,
    private walletConnectService: WalletService,
    public dialog: MatDialog,
    private router: Router,
  ) {
    if (router.url !== '/') {
      this.moonbaseActive = false;
    }
  }

  ngOnInit(): void {
    this.tokenomicsService.whenToggled().subscribe((state: boolean) => {
      this.toggleTokenomicsView(state);
    });

    this.moonbaseService.whenToggled().subscribe((state: boolean) => {
      this.toggleMoonbaseView(state);
    });

    this.releaseService.whenToggled().subscribe((state: boolean) => {
      this.toggleReleaseView(state);
    });

    this.walletConnectService.onWalletStateChanged().subscribe(async (state: boolean) => {
      this.isConnected = state;
      // console.log("CONNECTION STATUS IN SIDEBAR : " + this.isConnected);

      if (state) {
        await this.checkUserVested();
      }
    });

  }

  toggleTokenomicsView(active: boolean = null) {
    this.active = active || !this.active;

    if (this.active && (this.moonbaseActive || this.releaseBarActive)) {
      this.moonbaseActive = false;
      this.releaseBarActive = false;
    }
  }

  toggleMoonbaseView(moonbaseActive: boolean = null) {
    this.moonbaseActive = moonbaseActive || !this.moonbaseActive;

    if (this.moonbaseActive && (this.active || this.releaseBarActive)) {
      this.active = false;
      this.releaseBarActive = false;
    }
  }

  toggleReleaseView(releaseActive: boolean = null) {
    this.releaseBarActive = releaseActive || !this.releaseBarActive;

    if (this.releaseBarActive && (this.active || this.moonbaseActive)) {
      this.active = false;
      this.moonbaseActive = false
    }
  }

  @HostListener('document:click', ['$event'])
  onMouseEnter(event: any) {
    // where the event is originally invoked.   
    let footerMobileMenuTokenomicsItem = document.getElementById('footer-mobile-menu-tokenomics-item');
    let isFooterMenuTokenomicsButtonVisible = footerMobileMenuTokenomicsItem != null && footerMobileMenuTokenomicsItem.contains(event.target);

    if (!document.getElementById('sidebar').contains(event.target) && !document.getElementById('footer-tokenomics-text').contains(event.target) && !document.getElementById('nav-bar-tokenomics-text').contains(event.target) && !isFooterMenuTokenomicsButtonVisible) {
      // Clicked outside the box
      if (!document.getElementById('tokenomics-bar').contains(event.target)) {
        // Clicked outside the box
        this.active = false;
      }
      if (!document.getElementById('moonbase-bar').contains(event.target)) {
        // Clicked outside the box
        this.moonbaseActive = false;
      }
      if (!document.getElementById('release-bar').contains(event.target)) {
        // Clicked outside the box
        this.releaseBarActive = false;
      }
    }

  }

  connectWallet() {
    let dialogRef = this.dialog.open(WalletConnectComponent, {
      width: 'auto',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  async checkUserVested() {
    this.hasVested = await this.walletConnectService.hasVested(VESTING_CONTRACTS.MSHOT);
    return this.hasVested;
  }
}
