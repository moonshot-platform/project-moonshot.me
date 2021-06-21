import { Component } from '@angular/core';
import { TokenomicsService } from './services/tokenomics.service';
declare let particlesJS: any;

@Component({
  selector: 'app-root',
  template: '<div id="particles"></div><router-outlet></router-outlet>',
})
export class AppComponent {
  constructor( private tokenomicService: TokenomicsService ) {
    particlesJS.load('particles', 'assets/json/particlesjs-config.json');
    
    this.tokenomicService.init();
  }
}