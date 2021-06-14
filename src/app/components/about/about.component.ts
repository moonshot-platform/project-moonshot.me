import { Component } from '@angular/core';
import { tsParticles } from 'ng-particles';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  static readonly routeName: string = 'about';

  constructor() {
    tsParticles.loadJSON('particles', 'assets/json/particlesjs-config.json');
  }

}
