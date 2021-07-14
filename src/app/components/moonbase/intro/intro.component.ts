import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  moonbase = true;
  buyMoonbase = false;

  constructor() { }

  ngOnInit(): void {
  }

  buy_moonbase() {
    this.moonbase = false;
    this.buyMoonbase = true;
  }
}
