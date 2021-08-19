import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.scss']
})
export class PressComponent implements OnInit {

  pressList: any[] = [
    {
      'img': 'assets/media/images/press/Investorplace_yellow.svg',
      'whiteImg': 'assets/media/images/press/Investorplace_white.svg',
      'link': 'https://investorplace.com/2021/05/moonshot-crypto-11-things-to-know-about-the-new-token-driving-social-media-chatter/',
      hovered: false,
    },
    {
      'img': 'assets/media/images/press/Influencive_yellow.svg',
      'whiteImg': 'assets/media/images/press/Influencive_white.svg',
      'link': 'https://www.influencive.com/we-interviewed-developer-of-a-new-cryptocurrency-moonshot-to-find-out-many-interesting-things/',
      hovered: false,
    },
    {
      'img': 'assets/media/images/press/Markets-insider_yellow.svg',
      'whiteImg': 'assets/media/images/press/Markets-insider_white.svg',
      'link': 'https://markets.businessinsider.com/news/stocks/moonshot-crypto-11-things-to-know-about-the-new-token-driving-social-media-chatter-1030403285',
      hovered: false
    },
    {
      'img': 'assets/media/images/press/Einpresswire_yellow.svg',
      'whiteImg': 'assets/media/images/press/Einpresswire_white.svg',
      'link': 'https://www.einnews.com/pr_news/544177272/space-themed-nft-platform-moonshot-revamps-website-with-a-fresh-look',
      hovered: false

    }
  ];

  constructor() { }

  ngOnInit(): void {
  }


}
