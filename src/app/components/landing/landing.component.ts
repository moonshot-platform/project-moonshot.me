import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  static readonly routeName: string = '';

  seconds: number = 0;

  constructor() {
    this.seconds = 10000;
  }

  ngOnInit(): void {
  }

}
