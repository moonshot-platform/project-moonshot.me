import { Component, OnInit } from '@angular/core';
import { tsParticles } from 'ng-particles';
declare let particlesJS: any;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  static readonly routeName: string = '';

  constructor() {
    particlesJS.load('particles', 'assets/json/particlesjs-config.json', function () { });
  }

  ngOnInit(): void {
    // tsParticles.loadJSON('particles', 'assets/json/particlesjs-config.json');
    tsParticles.loadJSON('particles2', 'assets/json/particlesjs-config-yellow-balls.json');
  }

}
