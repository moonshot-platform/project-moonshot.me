import { Component, HostListener, OnInit } from '@angular/core';
import { TokenomicsService } from 'src/app/services/tokenomics.service';
import { MoonbaseService } from 'src/app/services/moonbase.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { WalletConnectComponent } from '../wallet-connect/wallet-connect.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  active = false;
  moonbaseActive = true;

  constructor(
    private tokenomicsService: TokenomicsService,
    private moonbaseService: MoonbaseService,
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
  }

  toggleTokenomicsView(active: boolean = null) {
    this.active = active || !this.active;

    if (this.moonbaseActive && this.active) {
      this.toggleMoonbaseView(false);
    }
  }

  toggleMoonbaseView(moonbaseActive: boolean = null) {
    this.moonbaseActive = moonbaseActive || !this.moonbaseActive;

    if (this.moonbaseActive && this.active) {
      this.toggleTokenomicsView(false);
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
    }
  }

  connectWallet() {
    let dialogRef = this.dialog.open(WalletConnectComponent, {
      width: 'auto',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
