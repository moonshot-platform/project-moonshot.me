import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Meta,Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  static readonly routeName: string = 'about';

  private fragment: string;

  constructor(
    private route: ActivatedRoute, 
    private location: Location,
    private _router: Router,
    private meta: Meta, // For Meta tags
    private title: Title // For Title of page
    ){
      this.meta.addTags([
        {name: 'description', content: 'An ambitious, exploratory, community driven experiment in the DeFi space'},
        {name: 'author', content: 'moonshot'},
        //{name: 'keywords', content: 'Moonshot, About Moonshot, Vision and Mission, Moonshot Mechanics, Security, What\'s Next'},
        
        {name:'twitter:card', content:'summary'},
        {name:'twitter:description', content:'Moonshot is a deflationary, frictionless yield and liquidity generation protocol.'},
        {name:'twitter:title', content:'MoonTV'},
        {name:'twitter:image', content:'./src/assets/media/images/moonshot-logo.png'},
        {name:'twitter:site', content:'@RS25Moonshot'},

        {property:'og:title', content:'Project Moonshot'},
        {property:'og:site_name', content:'Moonshot'},
        {property:'og:description', content:'Moonshot is a deflationary, frictionless yield and liquidity generation protocol.'},
        {property:'og:image', itemprop:'image', content:'./src/assets/media/images/moonshot-logo.png'},     

      ]);
      this.setTitle('About Moonshot'); // i do not know it is necessary.
    }
    public setTitle( newTitle: string) {
      this.title.setTitle( newTitle );
    }

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => { 
      this.fragment = fragment; 
      this.location.replaceState('/'+ AboutComponent.routeName); 
    });
  }

  ngAfterViewInit(): void {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) { }
  }

}
