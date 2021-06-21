import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenomicsService } from 'src/app/services/tokenomics.service';

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
      link: 'https://www.instagram.com/moonshotrs25/',
      icon: 'instagram-yellow-round-icon.svg',
      alt: 'Instagram'
    },
    {
      link: 'https://bscscan.com/address/0xd27d3f7f329d93d897612e413f207a4dbe8bf799#code',
      icon: 'bscscan-yellow-round-icon.png',
      alt: 'Bscscan'
    },
    {
      link: 'https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xd27D3F7f329D93d897612E413F207A4dbe8bF799',
      icon: 'pancakeswap-yellow-round-icon.png',
      alt: 'Pancakeswap'
    },
    {
      link: 'https://solidity.finance/audits/MOONSHOT/',
      icon: 'solidity-yellow-round-icon.png',
      alt: 'Solidity'
    },
  ]

  constructor(private _router: Router, private tokenomicsService: TokenomicsService) { }

  ngOnInit(): void {
  }

  scrollToElement(page: string, fragment: string): void {
    const element = document.querySelector(`#${fragment}`)
    if (element)  {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else
      this._router.navigate( [page], {fragment: fragment});
  }

  toggleTokenomics() {
    this.tokenomicsService.onToggle(true);
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