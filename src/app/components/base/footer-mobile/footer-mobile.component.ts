import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoonbaseService } from 'src/app/services/moonbase.service';
import { TokenomicsService } from 'src/app/services/tokenomics.service';

@Component({
  selector: 'app-footer-mobile',
  templateUrl: './footer-mobile.component.html',
  styleUrls: ['./footer-mobile.component.scss']
})
export class FooterMobileComponent implements OnInit {
  menuItem = false;
  isMoonbasebarOpenAtLaunch = true;
  constructor(
    private tokenomicsService: TokenomicsService,
    private moonbaseService: MoonbaseService,
    private router: Router) {
    if (router.url !== '/') {
      this.isMoonbasebarOpenAtLaunch = false;
    }
  }

  ngOnInit(): void {
  }

  menuopen() {
    this.menuItem = true;
  }
  closeMenu() {
    if (this.isMoonbasebarOpenAtLaunch) {
      this.isMoonbasebarOpenAtLaunch = false;
      this.toggleMoonbaseBar();
    } else {
      this.menuItem = false;
    }

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


}
