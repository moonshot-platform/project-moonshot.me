import { Component, OnDestroy, OnInit } from '@angular/core';
import { TokenomicsShareService } from 'src/app/services/tokenomics-share.service';
import { TokenomicsService } from 'src/app/services/tokenomics.service';

@Component({
  selector: 'app-tokenomics',
  templateUrl: './tokenomics.component.html',
  styleUrls: ['./tokenomics.component.scss']
})
export class TokenomicsComponent implements OnInit, OnDestroy {

  interval: any;
  
  public list: any = [
    [
      {
        key: "total supply:",
        val: "1,000,000,000,000,000",
        shortVal: "(1 quadrillion)"
      },
      {
        key: "circulating supply:",
        val: "---",
        shortVal: ""
      },
      {
        key: "burned forever:",
        val: "---",
        shortVal: ""
      },
    ],
    [
      {
        key: "moonshot for 1 bnb:",
        val: "---",
        shortVal: ""
      },
      {
        key: "market cap:",
        val: "---",
        shortVal: ""
      },
      {
        key: "price for 1 million moonshot:",
        val: "---",
        shortVal: ""
      },
      {
        key: "price for 1 moonshot:",
        val: "---",
        shortVal: ""
      }
    ]
  ]

  constructor(private tokenomicsShareService: TokenomicsShareService, private tokenomicsService: TokenomicsService) {
  }

  ngOnInit(): void {
    if( this.tokenomicsShareService.data !== undefined ) {
      this.replaceData();
    } else {
      this.interval = setInterval(() => {
        if( this.tokenomicsShareService.data !== undefined ) {
          this.replaceData();
          clearInterval(this.interval);
        }
      }, 100);
    }
  }

  replaceData() {
    this.list[0][1]['val'] = this.tokenomicsShareService.data['circulatingSupply'];
    this.list[0][2]['val'] = this.tokenomicsShareService.data['burnedAmount'];
    this.list[1][0]['val'] = this.tokenomicsShareService.data['priceFor1BNB'];
    this.list[1][0]['val'] = this.tokenomicsShareService.data['priceFor1BNB'];
    this.list[1][1]['val'] = '$' + this.tokenomicsShareService.data['marketcap'].substring(0,13);
    this.list[1][2]['val'] = '$' + this.tokenomicsShareService.data['priceFor1mMoonshot'].substring(0,13);
    this.list[1][3]['val'] = '$' + this.tokenomicsShareService.data['priceForMoonshot'].substring(0,13);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  toggleTokenomics() {
    this.tokenomicsService.close();
  }

}
