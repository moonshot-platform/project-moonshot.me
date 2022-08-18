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
      "title": "New shuttle; MOONSHOT token migration to V2!",
      "teaser": "Dear Moonshooters, It is time for a new chapter.As the release of our NFT marketplace ‘MoonSea’ is approaching, we have also taken a close look at our current tokenomics.",
      "link": "https://moonshotproject.substack.com/p/new-shuttle-moonshot-token-migration?s=r",
      "date": "APR 4, 2022",
      "img": "https://cdn.substack.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F078b413f-1b0b-4f4a-af6a-986059ba68c4_1200x675.jpeg",
      "from": "SUBSTACK"
    },
    {
      "title": "2021 A Year That Brought Us Closer To Our Goal",
      "teaser": 'Dear Moonshooters, First of all, thank you for this epic year. Since the start of this project, the community has been amazing and very supportive.',
      "link": "https://moonshotproject.substack.com/p/2021-a-year-that-brought-us-closer",
      "date": "DEC 31, 2021",
      "img": "https://cdn.substack.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F2b140b2a-2b11-4650-a66b-4d5ae2b4af9f_1200x675.jpeg",
      "from": "SUBSTACK"
    },
    {
      "title": "MoonSea a Decentralized NFT Marketplace",
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
      "teaser": "MoonBoxes - a MysteryBox program",
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
      "title": "Moonshot Introduces an NFT MysterBox program",
      "teaser": "In summary, a platform that raises funds for NFT projects/artists by allowing you to buy NFTs before they're publicly released. By doing this, The Moonshot Project is the first to introduce INO's",
      "link": "https://moonshotproject.substack.com/p/moonshot-introduces-an-nft-launchpad",
      "date": "AUG 24, 2021",
      "img": "https://cdn.substack.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F7b806f1b-95b8-4c9a-9c6e-d94ddd3b89da_1200x675.jpeg",
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
      "teaser": "Welcome to Moonshot Mission Updates by me, Moonshot BSC Token Project.",
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
      setTimeout(() => element.scrollIntoView({ behavior: 'smooth', block: 'start' }), 500);
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
