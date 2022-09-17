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
      "title": "MOONSHOT V2 Migration!",
      "teaser": "The MOONSHOT token started migration to V2 on April 4, 2022 at 19:00 CEST.",
      "link": "https://moonshotproject.substack.com/p/new-shuttle-moonshot-token-migration?s=r",
      "date": "APR 4, 2022",
      "img": "https://cdn.substack.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F078b413f-1b0b-4f4a-af6a-986059ba68c4_1200x675.jpeg",
      "from": "SUBSTACK"
    },
   
    {
      "title": "MoonSea.io - Decentralized MultiChain NFT Marketplace",
      "teaser": 'A Sea Full Of NFTs',
      "link": "https://moonshotproject.substack.com/p/moonsea-a-decentralized-nft-marketplace",
      "date": "OCT 26, 2021",
      "img": "https://cdn.substack.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F7251285b-4b78-4c91-a235-ae21989cc97d_1200x675.png",
      "from": "SUBSTACK"
    },
    {
      "title": "Moonboxes.io - NFT Mystery Boxes",
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
      "title": "MoonShooter Episode has premiered",
      "teaser": "You don't want to miss this! 🤩'\nSet your reminder on YouTube and watch the big reveal live with us all!\nGet your popcorn ready MoonShooter!",
      "link": "https://moonshotproject.substack.com/p/the-first-moonshooter-episode-is",
      "date": "AUG 27, 2021",
      "img": "https://cdn-images-1.medium.com/max/1024/0*5tyr9RmvSvOCru0K.png",
      "from": "SUBSTACK"
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
