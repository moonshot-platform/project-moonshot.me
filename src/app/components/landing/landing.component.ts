import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  static readonly routeName: string = '';

  private fragment: string;

  private anchor: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private meta: Meta,
    private title: Title,
    private router: Router,
  ) {
    this.meta.addTags([
      { name: 'description', content: 'Moonshot is a deflationary, frictionless yield and Liquidity protocol. Read more about Moonshot or start buying!' },
      { name: 'author', content: 'moonshot' },
      //{name: 'keywords', content: 'Moonshot, How To Buy Moonshot,Moonshot\'s Partners, Moonshot Community, MoonTicket, MoonPaper, MoonTV, Tokenomics, Merchandise, MoonGallery, About Moonshot, Fuel the rocket, moonshot, how to buy moonshot, moonshot partners, moonshot community, moonticket, moonpaper'} 
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
    this.setTitle('Moonshot');
  }

  public setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      this.fragment = fragment;
      this.location.replaceState('/');
    });

    this.route.data.subscribe(data => {
      const element = data.anchor.toString();
      if ( element !== undefined ) {
        if (element) setTimeout(() => element.scrollIntoView({ behavior: 'smooth', block: 'start' }), 500);
      }
    });
  }

  ngAfterViewInit(): void {
    try {
      setTimeout(() => document.querySelector('#' + this.fragment).scrollIntoView({ behavior: 'smooth', block: 'start' }), 500);
    } catch (e) { }
  }

  scrollToElement(anchor: string): void {
    this.router.navigate(['/'], { fragment: anchor })
  }

}
