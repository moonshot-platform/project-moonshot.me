import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  icons: IconModel[] = [
    {
      link: 'https://www.github.com',
      icon: 'github-yellow-round-icon.svg',
      alt: 'Github'
    },
    {
      link: 'https://www.twitter.com',
      icon: 'twitter-yellow-round-icon.svg',
      alt: 'Twitter'
    },
    {
      link: 'https://www.telegram.com',
      icon: 'telegram-yellow-round-icon.svg',
      alt: 'Telegram'
    },
    {
      link: 'https://www.discord.com',
      icon: 'discord-yellow-round-icon.svg',
      alt: 'Discord'
    },
    {
      link: 'https://www.reddit.com',
      icon: 'reddit-yellow-round-icon.svg',
      alt: 'Reddit'
    },
    {
      link: 'https://www.solidity.com',
      icon: 'solidity-yellow-round-icon.png',
      alt: 'Solidity'
    },
    {
      link: 'https://www.pancakeswap.com',
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