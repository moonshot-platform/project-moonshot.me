import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  icons: IconModel[] = [
    {
      link: 'https://github.com/moonshot-platform',
      icon: 'github-yellow-round-icon.svg',
      alt: 'Github'
    },
    {
      link: 'https://twitter.com/RS25Moonshot',
      icon: 'twitter-yellow-round-icon.svg',
      alt: 'Twitter'
    },
    {
      link: 'https://t.me/MoonShotChat',
      icon: 'telegram-yellow-round-icon.svg',
      alt: 'Telegram'
    },
    {
      link: 'https://discord.com/invite/QrXVQRKzrh',
      icon: 'discord-yellow-round-icon.svg',
      alt: 'Discord'
    },
    {
      link: 'https://www.reddit.com/r/MoonshotRS25/',
      icon: 'reddit-yellow-round-icon.svg',
      alt: 'Reddit'
    },
    {
      link: 'https://solidity.finance/audits/MOONSHOT/',
      icon: 'solidity-yellow-round-icon.png',
      alt: 'Solidity'
    },
    {
      link: 'https://bscscan.com/token/0x8301f0146f8f58e267a3c229bce13b03bc4a1ba0?a=0xbd67d157502a23309db761c41965600c2ec788b2',
      icon: 'bscscan-yellow-round-icon.png',
      alt: 'Bscscan'
    },
    {
      link: 'https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xd27D3F7f329D93d897612E413F207A4dbe8bF799',
      icon: 'pancakeswap-yellow-round-icon.png',
      alt: 'Pancakeswap'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

class IconModel {
  link: String;
  icon: String;
  alt: String;

  constructor( { link, icon, alt } ) {
    this.link = link;
    this.icon = icon;
    this.alt = alt;
  }
}