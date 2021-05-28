import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public imgSrcList: any = [
    {
      src: "",
      srcOut: "assets/media/images/about/shares_icon_yellow.svg",
      srcOn: "assets/media/images/about/shares_icon.svg",
      alt: "shares",
      text: "4% of tx goes to holders"
    },
    {
      src: "",
      srcOut: "assets/media/images/about/volatile_icon_yellow.svg",
      srcOn: "assets/media/images/about/volatile_icon.svg",
      alt: "volatile",
      text: "Deflationary protocol"
    },
    {
      src: "",
      srcOut: "assets/media/images/about/liquidity_icon_yellow.svg",
      srcOn: "assets/media/images/about/liquidity_icon.svg",
      alt: "liquidity",
      text: "Auto-adding liquidity for lower volatility"
    },
    {
      src: "",
      srcOut: "assets/media/images/about/gamification_icon_yellow.svg",
      srcOn: "assets/media/images/about/gamification_icon.svg",
      alt: "gamification",
      text: "NFTs, Gamification and Lottery"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
