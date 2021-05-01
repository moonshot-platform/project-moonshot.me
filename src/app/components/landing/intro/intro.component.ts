import { Component, OnInit } from '@angular/core';
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
  }
}
