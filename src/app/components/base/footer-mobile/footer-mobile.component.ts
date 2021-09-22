import { Component, OnInit } from '@angular/core';
import { TokenomicsService } from 'src/app/services/tokenomics.service';

@Component({
  selector: 'app-footer-mobile',
  templateUrl: './footer-mobile.component.html',
  styleUrls: ['./footer-mobile.component.scss']
})
export class FooterMobileComponent implements OnInit {
  menuItem = false;
  constructor(private tokenomicsService: TokenomicsService) { }

  ngOnInit(): void {
  }

  menuopen() {
    this.menuItem = true;
  }
  closeMenu() {
    this.menuItem = false;
  }
  toggleTokenomics() {
    this.tokenomicsService.onToggle(true);
    setTimeout(() => {
      this.closeMenu();
    }, 50)
  }


}
