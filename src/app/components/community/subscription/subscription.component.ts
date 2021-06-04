import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {

  public imgSrcList: any = [
    {
      src: "",
      srcOut: "assets/media/images/news/github_icon_yellow.svg",
      srcOn: "assets/media/images/news/github_icon.svg",
      alt: "github"
    },
    {
      src: "",
      srcOut: "assets/media/images/news/twitter_icon_yellow.svg",
      srcOn: "assets/media/images/news/twitter_icon.svg",
      alt: "twitter"
    },
    {
      src: "",
      srcOut: "assets/media/images/news/telegram_icon_yellow.svg",
      srcOn: "assets/media/images/news/telegram_icon.svg",
      alt: "telegram"
    },
    {
      src: "",
      srcOut: "assets/media/images/news/discord_icon_yellow.svg",
      srcOn: "assets/media/images/news/discord_icon.svg",
      alt: "discord"
    },
    {
      src: "",
      srcOut: "assets/media/images/news/reddit_icon_yellow.svg",
      srcOn: "assets/media/images/news/reddit_icon.svg",
      alt: "reddit"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
