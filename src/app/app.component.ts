import { Component } from '@angular/core';
import { TokenomicsService } from './services/tokenomics.service';

import smoothscroll from 'smoothscroll-polyfill';


@Component({
  selector: 'app-root',
  template: '<div id="particles"></div><router-outlet></router-outlet>',
})
export class AppComponent {
  constructor( private tokenomicService: TokenomicsService ) {
    smoothscroll.polyfill();
    this.tokenomicService.init();
  }
}