import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Meta,Title } from '@angular/platform-browser';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  static readonly routeName: string = '';

  private fragment: string;

  constructor(
    private route: ActivatedRoute, 
    private location: Location,
    private meta: Meta,
    private title: Title,
    ) {
      this.meta.addTags([
        {name: 'description', content: 'Moonshot is a deflationary, frictionless yield and Liquidity protocol. Read more about Moonshot or start buying!'},
        {name: 'author', content: 'moonshot'},
      //{name: 'keywords', content: 'Moonshot, How To Buy Moonshot,Moonshot\'s Partners, Moonshot Community, MoonTicket, MoonPaper, MoonTV, Tokenomics, Merchandise, MoonGallery, About Moonshot, Fuel the rocket, moonshot, how to buy moonshot, moonshot partners, moonshot community, moonticket, moonpaper'} 
        {name:'twitter:card', content:'summary'},
        {name:'twitter:description', content:'Watch MoonTV - Zap to your favourite channel and watch some Moonshot crypto'},
        {name:'twitter:title', content:'MoonTV'},
        {name:'twitter:image', content:'./src/assets/media/images/moonshot-logo.png'},
        {name:'twitter:site', content:'@RS25Moonshot'},

        {property:'og:title', content:'Project Moonshot'},
        {property:'og:site_name', content:'Moonshot'},
        {property:'og:description', content:'MoonTV - Zap to your favourite channel'},
        {property:'og:image', content:'./src/assets/media/images/moonshot-logo.png'},     
/* 
        {property:'og:type', content:'website'},
        {property:'og:site_name', content:'Moonshot'},
        {property:'og:title', content:'Project Moonshot'},
        {property:'og:description', content:'Watch MoonTV - Zap to your favourite channel and watch some Moonshot crypto'},
        {property:'og:url', content:'https://t.me/MoonShotChat'},
        {property:'og:locale', content:'en_US'},
        {property:'og:image', content:'https://cdn4.telesco.pe/file/WB_mshLvhrX1lDICQ_oYE_8zcAS_gse7Oz7EeSMZHMyOiLYJ3QloLfPuUeRDkobvrk6eDoc9DzRHu6Ct2JrrotdUfnH7xBIzyVlHS53InqEKKUpqw4202ccEvr8LVfoadOHMo-Lbmu6fULjK9dk6xt8pnGAPitxtBP_NQjKDwAlR7PV7OsPdohlplsuWzWAuusPBP0kZD2ZV5Z7hHiUCKS2YzDfSYHqKXliUe1MnKG7XOjEj05Cy5ZRh1QtWDsWiJsDwLHNlzKEIBwCbYTS-06xouZwghEiJMB8mSn3HeNsbIa6b3THJeCELtquzalT1Ee7Z_-_O9kRP0lzYnGqj2A.jpg'},
 */
      ]);
      this.setTitle('Moonshot');
    }
    public setTitle( newTitle: string) {
      this.title.setTitle( newTitle );
    }

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => { 
      this.fragment = fragment; 
      this.location.replaceState('/'); 
    });
  }

  ngAfterViewInit(): void {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) { }
  }

}
