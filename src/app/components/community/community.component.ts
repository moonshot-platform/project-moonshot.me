import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent {

  static readonly routeName: string = 'community';

  private fragment: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private _router: Router,
    private meta: Meta,
    private title: Title,
  ) {
    this.meta.addTags([
      { name: 'description', content: 'The endless energy and creativity of our community and the desire to help each other to reach project milestones is our biggest strength and motivator. Join the #MoonSquad and be part of the Moonshot community' },
      { name: 'author', content: 'moonshot' },
      //{name: 'keywords', content: 'Moonshot, Moonshot Community, MoonTV, MoonTicket, MoonGallery, moonshot, moonshot community, moontv, moongallery, moonticket, moon tv, moon gallery, moon ticket'}
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:description', content: 'Moonshot is a deflationary, frictionless yield and liquidity generation protocol.' },
      { name: 'twitter:title', content: 'MoonTV' },
      { name: 'twitter:image', content: 'https://i.ibb.co/g9JHhdK/moonshot-logo.png' },
      { name: 'twitter:site', content: '@RS25Moonshot' },

      { property: 'og:title', content: 'Project Moonshot' },
      { property: 'og:site_name', content: 'Moonshot' },
      { property: 'og:description', content: 'Moonshot is a deflationary, frictionless yield and liquidity generation protocol.' },
      { property: 'og:image', itemprop: 'image', content: 'https://i.ibb.co/g9JHhdK/moonshot-logo.png' },

    ]);
    this.setTitle('Moonshot Community');
  }
  public setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      this.fragment = fragment;
      this.location.replaceState('/community');
    });
  }

  ngAfterViewInit(): void {
    try {
      setTimeout(() => document.querySelector('#' + this.fragment).scrollIntoView({ behavior: 'smooth', block: 'start' }), 500);
    } catch (e) { }
  }

}
