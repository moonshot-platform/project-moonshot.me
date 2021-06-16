import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tokenomics',
  templateUrl: './tokenomics.component.html',
  styleUrls: ['./tokenomics.component.scss']
})
export class TokenomicsComponent implements OnInit {

  public list: any = [
    [
      {
        key: "total supply:",
        val: "1,000,000,000,000,000",
        shortVal: "(1 quadrillion)"
      },
      {
        key: "circulating supply:",
        val: "607,374,578,320,453",
        shortVal: ""
      },
      {
        key: "burned forever:",
        val: "392,625,581,608,018",
        shortVal: ""
      },
    ],
    [
      {
        key: "moonshot for 1 bnb:",
        val: "15,117,475,090",
        shortVal: ""
      },
      {
        key: "market cap:",
        val: "$23,918,890",
        shortVal: ""
      },
      {
        key: "price for 1 million moonshot:",
        val: "$0.03935…",
        shortVal: ""
      },
      {
        key: "price for 1 moonshot:",
        val: "$0.00000004219…",
        shortVal: ""
      }
    ]
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
