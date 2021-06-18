import { Component, OnInit } from '@angular/core';
import { TokenomicsToggleService } from 'src/app/services/tokenomics-toggle.service';

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
        val: "595,058,408,293,513",
        shortVal: ""
      },
      {
        key: "burned forever:",
        val: "404,941,663,493,997",
        shortVal: ""
      },
    ],
    [
      {
        key: "moonshot for 1 bnb:",
        val: "34,088,893,200",
        shortVal: ""
      },
      {
        key: "market cap:",
        val: "$6,088,156",
        shortVal: ""
      },
      {
        key: "price for 1 million moonshot:",
        val: "$0.010208506798924172",
        shortVal: ""
      },
      {
        key: "price for 1 moonshot:",
        val: "$0.000000010208234217472335",
        shortVal: ""
      }
    ]
  ]

  constructor(private tokenomicsToggleService: TokenomicsToggleService) { }

  ngOnInit(): void {
  }

  toggleTokenomics() {
    this.tokenomicsToggleService.doToggle();
  }

}
