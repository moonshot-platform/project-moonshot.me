import { Component, HostListener, OnInit } from '@angular/core';
import { TokenomicsService } from 'src/app/services/tokenomics.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { WalletConnectComponent } from '../wallet-connect/wallet-connect.component';
import { VESTING_CONTRACTS, WalletService } from 'src/app/services/wallet-service.service';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  active = false;
  moonbaseActive = true;
  releaseBarActive = false;
  miningBarActive = false;
  moonseaBarActive = false;

  isConnected: boolean = false;
  hasVested: boolean = false;

  constructor(
    private tokenomicsService: TokenomicsService,
    private sidebarService: SidebarService,
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

    this.sidebarService.whenMoonboxesBarToggled().subscribe((state: boolean) => {
      this.toggleMoonbaseView(state);
    });

    this.sidebarService.whenReleaseBarToggled().subscribe((state: boolean) => {
      this.toggleReleaseView(state);
    });

    this.sidebarService.whenMiningBarToggled().subscribe((state: boolean) => {
      this.toggleMiningView(state);
    });

    this.sidebarService.whenMoonseaBarToggled().subscribe((state: boolean) => {
      this.toggleMoonseaView(state);
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

    if (this.active && (this.moonbaseActive || this.releaseBarActive || this.miningBarActive || this.moonseaBarActive)) {
      this.moonbaseActive = false;
      this.releaseBarActive = false;
      this.miningBarActive = false;
      this.moonseaBarActive = false;
    }
  }

  toggleMoonbaseView(moonbaseActive: boolean = null) {
    this.moonbaseActive = moonbaseActive || !this.moonbaseActive;

    if (this.moonbaseActive && (this.active || this.releaseBarActive || this.miningBarActive || this.moonseaBarActive)) {
      this.active = false;
      this.releaseBarActive = false;
      this.miningBarActive = false;
      this.moonseaBarActive = false;
    }
  }

  toggleReleaseView(releaseActive: boolean = null) {
    this.releaseBarActive = releaseActive || !this.releaseBarActive;

    if (this.releaseBarActive && (this.active || this.moonbaseActive || this.miningBarActive || this.moonseaBarActive)) {
      this.active = false;
      this.moonbaseActive = false
      this.miningBarActive = false;
      this.moonseaBarActive = false;
    }
  }

  toggleMoonseaView(releaseActive: boolean = null) {
    this.moonseaBarActive = releaseActive || !this.moonseaBarActive;

    if (this.moonseaBarActive && (this.active || this.moonbaseActive || this.releaseBarActive || this.miningBarActive)) {
      this.active = false;
      this.moonbaseActive = false;
      this.releaseBarActive = false;
      this.miningBarActive = false;
    }
  }

  toggleMiningView(releaseActive: boolean = null) {
    this.miningBarActive = releaseActive || !this.miningBarActive;

    if (this.miningBarActive && (this.active || this.moonbaseActive || this.releaseBarActive || this.moonseaBarActive)) {
      this.active = false;
      this.moonbaseActive = false;
      this.releaseBarActive = false;
      this.moonseaBarActive = false;
    }
  }

  @HostListener('document:click', ['$event'])
  onMouseEnter(event: any) {
    // where the event is originally invoked.   
    let footerMobileMenuTokenomicsItem = document.getElementById('footer-mobile-menu-tokenomics-item');
    let footerMobileMenuVestingItem = document.getElementById('footer-mobile-menu-vesting-item');
    let footerMobileMenuMiningItem = document.getElementById('footer-mobile-menu-mining-item');
    let footerMobileMenuMoonseaItem = document.getElementById('footer-mobile-menu-moonsea-item');

    let isFooterMenuTokenomicsButtonVisible = footerMobileMenuTokenomicsItem != null && footerMobileMenuTokenomicsItem.contains(event.target);

    if (
      !document.getElementById('sidebar').contains(event.target) &&
      !document.getElementById('footer-tokenomics-text').contains(event.target) &&
      !document.getElementById('nav-bar-tokenomics-text').contains(event.target) &&
      !isFooterMenuTokenomicsButtonVisible &&
      !footerMobileMenuVestingItem &&
      !footerMobileMenuMiningItem &&
      !footerMobileMenuMoonseaItem) {

      // console.log("Clicked outside");

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
      if (!document.getElementById('mining-bar').contains(event.target)) {
        // Clicked outside the box
        this.miningBarActive = false;
      }
      if (!document.getElementById('moonsea-bar').contains(event.target)) {
        // Clicked outside the box
        this.moonseaBarActive = false;
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
