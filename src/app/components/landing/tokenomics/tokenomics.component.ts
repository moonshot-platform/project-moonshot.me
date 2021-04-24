import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tokenomics',
  templateUrl: './tokenomics.component.html',
  styleUrls: ['./tokenomics.component.scss']
})
export class TokenomicsComponent implements OnInit {

  public list: any = [
    {
      key: "total supply:",
      val: "1,000,000,000,000,000 (1 quadrillion)"
    },
    {
      key: "circulating supply:",
      val: "000,000,000"
    },
    {
      key: "burned forever:",
      val: "000,000,000"
    },
    {
      key: "price for one moonshot:",
      val: "000,000,000"
    },
    {
      key: "price for one million moonshot:",
      val: "000,000,000"
    },
    {
      key: "moonshot for 1 bnb:",
      val: "1 bnb = 000,000,000 moonshot"
    },
    {
      key: "market cap:",
      val: "000,000,000"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
