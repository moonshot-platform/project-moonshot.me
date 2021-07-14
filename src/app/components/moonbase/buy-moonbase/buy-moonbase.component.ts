import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-moonbase',
  templateUrl: './buy-moonbase.component.html',
  styleUrls: ['./buy-moonbase.component.scss', './../moonbase.component.scss', './../intro/intro.component.scss']
})
export class BuyMoonbaseComponent implements OnInit {

  inputnumber = 1;
  static readonly routeName: string = 'buy_moonbase';
  constructor() { }

  ngOnInit(): void {
  }

  plus() {
    this.inputnumber = this.inputnumber + 1;
  }
  minus() {
    if (this.inputnumber != 1) {
      this.inputnumber = this.inputnumber - 1;
    }

  }

}
