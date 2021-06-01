import { Component, OnInit } from '@angular/core';
import { tsParticles } from 'ng-particles';
declare let particlesJS: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  static readonly routeName: string = 'about';

  constructor() {
    particlesJS.load('particles', 'assets/json/particlesjs-config.json', function () { });
  }

  ngOnInit(): void {
    // tsParticles.loadJSON('particles', 'assets/json/particlesjs-config.json');
    tsParticles.loadJSON('particles2', 'assets/json/particlesjs-config-yellow-balls.json');
  }

}
