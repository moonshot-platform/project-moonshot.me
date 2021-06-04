import { Component, OnInit } from '@angular/core';
import { tsParticles } from 'ng-particles';
declare let particlesJS: any;

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {

  static readonly routeName: string = 'community';

  constructor() {
    particlesJS.load('particles', 'assets/json/particlesjs-config.json', function () { });
  }

  ngOnInit(): void {
    // tsParticles.loadJSON('particles', 'assets/json/particlesjs-config.json');
    tsParticles.loadJSON('particles2', 'assets/json/particlesjs-config-yellow-balls.json');
  }

}
