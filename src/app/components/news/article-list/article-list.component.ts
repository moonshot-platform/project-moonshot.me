import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShareModalComponent } from '../share-modal/share-modal.component';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  articleList: any[] = [
    {
      "title": "MoonSea a Decentralized NFT Marketplace With Revenue Sharing Among Top MOONSHOT Holders",
      "teaser": 'Just like the crypto you are familiar with, the value of an NFT can also be determined by offering them on the open market. On a so-called NFT marketplace, collectors can place bids or purchase NFT',
      "link": "https://moonshotproject.substack.com/p/moonsea-a-decentralized-nft-marketplace",
      "date": "OCT 26, 2021",
      "img": "https://cdn.substack.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F7251285b-4b78-4c91-a235-ae21989cc97d_1200x675.png",
      "from": "SUBSTACK"
    },
    {
      "title": "Moonboxes.io is LIVE!",
      "teaser": 'After months of hard work, we are pleased to inform you that moonboxes.io is now live and running on the mainnet',
      "link": "https://moonshotproject.substack.com/p/moonboxesio-is-live",
      "date": "SEP 30, 2021",
      "img": "https://cdn.substack.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F4cf34793-5fc9-4e05-921a-7c9e0f839c08_1200x675.jpeg",
      "from": "SUBSTACK"
    },
    {
      "title": "Moonshot Integrates With Cryptocurrency Checkout Enabling Twitch, WordPress, Shopify and More for Payments and Donations",
      "teaser": 'Moonshot is integrating with Cryptocurrency Checkout service. Everyone can accept payments and donations in Moonshot tokens on websites and social media for free! This integration brings more utili',
      "link": "https://moonshotproject.substack.com/p/moonshot-integrates-with-cryptocurrency",
      "date": "SEP 28, 2021",
      "img": "https://cdn.substack.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F75fdc738-0530-4453-8b95-bfee32c5e4a7_1200x675.png",
      "from": "SUBSTACK"
    },
    {
      "title": "Join the Moonboxes NFT Influencer Team",
      "teaser": 'Come join the team!\nMoonboxes.io will be the center of NFTs launched on the Binance Smart Chain. The MoonBox platform will be a one-stop-DApp for NFT enthusiasts on which they can explore upcoming',
      "link": "https://moonshotproject.substack.com/p/join-the-moonshot-nft-influencer",
      "date": "SEP 22, 2021",
      "img": "https://cdn.substack.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fdabaad86-eb50-4e5c-932b-c40240143b75_1200x675.jpeg",
      "from": "SUBSTACK"
    },
    {
      "title": "Moonshot Beta Launch",
      "teaser": 'Welcome to the MoonBase Beta testing period this week. Before we launch the official product we want you, our valued community, to test drive buying and opening MoonBoxes that will reveal the NFTs',
      "link": "https://moonshotproject.substack.com/p/moonshot-beta-launch",
      "date": "SEP 21, 2021",
      "img": "https://cdn.substack.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F3c3f5c9c-2ef2-4648-b28e-d7fee50f0306_1200x675.jpeg",
      "from": "SUBSTACK"
    },
    {
      "title": "Meet The Moonshot Mascot!",
      "teaser": 'Since the beginning of the Moon mission, we have wanted a mascot that compliments the overall Moonshot brand by adding a bit of personality and something that',
      "link": "https://moonshotproject.substack.com/p/meet-the-moonshot-mascot",
      "date": "SEP 6, 2021",
      "img": "https://cdn.substack.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F55491086-b167-4b9e-a5b3-d2126fe7b622_2040x2040.png",
      "from": "SUBSTACK"
    },


  ];

  restOfArticleList: any[] = [
    {
      "title": "MoonShooter Premiere, Farming Shibance NFTs , MoonBoxes Ecosystem .",
      "teaser": 'Hello MoonShooters, what a busy but exciting time for us all on this Moon mission. The team is hard at work and soon you’ll be able to open MoonBoxes with limited edition astronaut NFTs. A lot is',
      "link": "https://moonshotproject.substack.com/p/moonshooter-premiere-farming-shibance",
      "date": "SEP 1, 2021",
      "img": "https://cdn.substack.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Ff83fffcd-6429-4967-8a3f-7507dd9300f0_1200x675.jpeg",
      "from": "SUBSTACK"
    },
    {
      "title": "The First MoonShooter Episode is Premiering this Weekend!!",
      "teaser": "You don't want to miss this! 🤩'\nSet your reminder on YouTube and watch the big reveal live with us all!\nGet your popcorn ready MoonShooter!",
      "link": "https://moonshotproject.substack.com/p/the-first-moonshooter-episode-is",
      "date": "AUG 27, 2021",
      "img": "https://cdn-images-1.medium.com/max/1024/0*5tyr9RmvSvOCru0K.png",
      "from": "SUBSTACK"
    },
    {
      "title": "Moonboxes Tiered INO Structure",
      "teaser": "MoonBase by Moonshot is the first decentralized INO (Initial NFT Offering) platform on Binance Smart Chain. MoonBase will empower NFT collectors and allow NFT creators to use a loot box mechanism",
      "link": "https://moonshotproject.substack.com/p/moonshot-tiered-ino-structure",
      "date": "AUG 27, 2021",
      "img": "https://cdn.substack.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fe866b91d-7cc3-4427-b514-d34a0d0d76e5_1200x675.jpeg",
      "from": "COINSPEAKER"
    },
    {
      "title": "NFT Loot Boxes Called MoonBoxes Are Launching Soon for Creators and Collectors",
      "teaser": "Among the things that give non-fungible tokens (NFTs) their value is their built-in scarcity. Unlike a dollar bill, which is fungible and can be exchanged one for another, NFTs are unique, giving",
      "link": "https://www.coinspeaker.com/nft-loot-boxes-called-moonboxes-are-launching-soon-for-creators/",
      "date": "AUG 25, 2021",
      "img": "https://www.coinspeaker.com/wp-content/uploads/2021/08/nft-loot-boxes-called-moonboxes-are-launching-soon-for-creators.jpg",
      "from": "INFLUENCIVE"
    },
    {
      "title": "Moonshot Introduces an NFT Launchpad for Initial NFT Offerings",
      "teaser": "In summary, a platform that raises funds for NFT projects/artists by allowing you to buy NFTs before they're publicly released. By doing this, The Moonshot Project is the first to introduce INO's",
      "link": "https://moonshotproject.substack.com/p/moonshot-introduces-an-nft-launchpad",
      "date": "AUG 24, 2021",
      "img": "https://cdn.substack.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F7b806f1b-95b8-4c9a-9c6e-d94ddd3b89da_1200x675.jpeg",
      "from": "SUBSTACK"
    },
    {
      "title": "Guide for Providing Liquidity (farming) Moonshot on Shibance",
      "teaser": "We’ve put together this little guide to help everyone who wants to farm Moonshot on the Shibance platform since we are now partnered with them.Our community manager Chocoboknight1 took a day to sit",
      "link": "https://moonshotproject.substack.com/p/guide-for-farming-moonshot-woof",
      "date": "AUG 4, 2021",
      "img": "https://cdn.substack.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F0e89cb5c-f96a-4712-adc7-366c3085bbef_1200x627.png",
      "from": "SUBSTACK"
    },
    {
      "title": "Masteroids Arcade Style Game by Moonshot",
      "teaser": "Still in development: In this take on the classic “Asteroids” arcade game, you must shoot apart oncoming enemies and obstacles while avoiding collisions as the game gets faster and more difficult.",
      "link": "https://moonshotproject.substack.com/p/masteroids-arcade-style-game-by-moonshot",
      "date": "JUL 30, 2021",
      "img": "https://cdn.substack.com/image/youtube/w_728,c_limit/BlbJQa0wUhM",
      "from": "SUBSTACK"
    },
    {
      "title": "Moonshot Collaboration with Shibance",
      "teaser": "Did you know we have a collaboration with Shibance?\nEarn yourself some $WOOF 🚀\nStart farming🧑‍🌾now on Shibance.com\nLP pair: MOONSHOT - WOOF",
      "link": "https://moonshotproject.substack.com/p/moonshot-collaboration-with-shibance",
      "date": "JUL 29, 2021",
      "img": "https://cdn.substack.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Faf7e22d4-642f-44e9-9192-7a5618740ef1_1200x627.png",
      "from": "SUBSTACK"
    },
    {
      "title": "Moonshot Update and AMA Recap",
      "teaser": "Hello Moonshooters, some recent updates worth noting while we are on the journey to the moon.Starting this week, we will consolidate all our telegram groups into the main Moonshot channel.",
      "link": "https://moonshotproject.substack.com/p/moonshot-update-and-ama-recap",
      "date": "JUL 28, 2021",
      "img": "https://cdn.substack.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fca7dd203-cbe0-4b04-b38b-799c05807bb9_680x355.png",
      "from": "SUBSTACK"
    },
    {
      "title": "An Exclusive Interview With the Founder of Moonshot",
      "teaser": "The idea to enter the space with a project of our own dates back to 2017. We have been discussing ideas off-and-on for years but never found the perfect combination of factors and people for",
      "link": "https://www.influencive.com/we-interviewed-developer-of-a-new-cryptocurrency-moonshot-to-find-out-many-interesting-things/",
      "date": "JUL 25, 2021",
      "img": "https://www.influencive.com/wp-content/uploads/2021/07/C02BA8C2-A75A-49D4-A8CB-43CBEBCD16B3.jpeg",
      "from": "INFLUENCIVE"
    },
    {
      "title": "Moonshot Meme Master contest is live on Reddit",
      "teaser": "Every week, we will be looking for submissions from the community for Moonshot memes and pick out the best ones. A winner will be selected every week",
      "link": "https://moonshotproject.substack.com/p/moonshot-meme-master-contest-is-live",
      "date": "JUL 21, 2021",
      "img": "https://cdn.substack.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fd01264e9-828f-4b85-a3c4-0c1ff3076f80_1200x675.jpeg",
      "from": "SUBSTACK"
    },
    {
      "title": "Moonshot 100 Days Milestone Reached!",
      "teaser": "Moonshot is 100 days old, what an epic journey to date! The team is hard at work on the next 100 days of the mission but we want to celebrate with you today and thank you for making Moonshot",
      "link": "https://rs25moonshot.medium.com/moonshot-100-days-milestone-reached-44ae2307bcee",
      "date": "JUL 11, 2021",
      "img": "https://miro.medium.com/max/1400/1*8e7uiYqBcz8nSrCwi2rh3Q.png",
      "from": "MEDIUM"
    },
    {
      "title": "Development and progress updates from the Moonshot BSC token project",
      "teaser": "Welcome to Moonshot Mission Updates by me, Moonshot BSC Token Project. Deflationary, frictionless yield and liquidity generation protocol! #MSHOT imminent",
      "link": "https://moonshotproject.substack.com/p/coming-soon",
      "date": "JUL 9, 2021",
      "img": "https://cdn.substack.com/image/youtube/w_728,c_limit/BlbJQa0wUhM",
      "from": "SUBSTACK"
    },
    {
      "title": "Moonshot Crypto: 11 Things to Know About the New Token Driving Social Media Chatter",
      "teaser": "Interest in cryptocurrencies is rapidly growing. With this growing interest comes a new frontier, a Wild West of new crypto coins and tokens popping up",
      "link": "https://investorplace.com/2021/05/moonshot-crypto-11-things-to-know-about-the-new-token-driving-social-media-chatter/",
      "date": "JUL 9, 2021",
      "img": "https://investorplace.com/wp-content/uploads/2021/02/space-race-300x169.png",
      "from": "INVESTORPLACE"
    },

  ]

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  showDetail(article: any) {

  }

  onLoadMoreClick() {
    this.articleList.push(...this.restOfArticleList);
  }

  scrollToElement(page: string, fragment: string): void {
    const element = document.querySelector(`#${fragment}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  openShareDialog(data: any) {
    let dialogRef = this.dialog.open(ShareModalComponent, {
      width: 'auto',
      closeOnNavigation: true,
      data: { title: data.title, url: data.link }
    });
  }

}
