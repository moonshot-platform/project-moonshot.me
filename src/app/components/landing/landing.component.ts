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
        {name: 'keywords', content: 'Moonshot, How To Buy Moonshot,Moonshot\'s Partners, Moonshot Community, MoonTicket, MoonPaper, MoonTV, Tokenomics, Merchandise, MoonGallery, About Moonshot, Fuel the rocket, moonshot, how to buy moonshot, moonshot partners, moonshot community, moonticket, moonpaper'}
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
