import { Component, OnInit } from '@angular/core';
import { Container, Main, ISourceOptions, tsParticles } from 'ng-particles';
declare let particlesJS: any;

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor() {
    particlesJS.load('particles', 'assets/json/particlesjs-config.json', function () { });
  }

  ngOnInit(): void {
    tsParticles.loadJSON('particles2', 'assets/json/particlesjs-config-yellow-balls.json');
  }

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  particlesInit(main: Main): void {
    console.log(main);

    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
  }
}
