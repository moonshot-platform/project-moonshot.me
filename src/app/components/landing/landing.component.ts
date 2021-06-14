import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tsParticles } from 'ng-particles';
declare let particlesJS: any;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  static readonly routeName: string = '';

  private fragment: string;

  constructor(private route: ActivatedRoute) {
    particlesJS.load('particles', 'assets/json/particlesjs-config.json', function () { });
  }

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
    tsParticles.loadJSON('particles2', 'assets/json/particlesjs-config-yellow-balls.json');
  }

  ngAfterViewInit(): void {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) { }
  }

}
