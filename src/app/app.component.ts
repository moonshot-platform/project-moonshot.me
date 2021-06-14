import { Component } from '@angular/core';
declare let particlesJS: any;

@Component({
  selector: 'app-root',
  template: '<div id="particles"></div><router-outlet></router-outlet>',
})
export class AppComponent {
  constructor() {
    particlesJS.load('particles', 'assets/json/particlesjs-config.json');
  }
}