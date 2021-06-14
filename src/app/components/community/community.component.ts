import { Component } from '@angular/core';
import { tsParticles } from 'ng-particles';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent {

  static readonly routeName: string = 'community';

  constructor() {
    tsParticles.loadJSON('particles', 'assets/json/particlesjs-config.json');
  }

}
