import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  seconds: number = 0;

  constructor() {
    this.seconds = 10000;
  }

  ngOnInit(): void {
  }
}
