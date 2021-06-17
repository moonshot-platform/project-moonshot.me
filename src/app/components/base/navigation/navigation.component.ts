import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TokenomicsToggleService } from 'src/app/services/tokenomics-toggle.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public atTop = true;
  public open = false;

  public navItems: any[] = [
    {
      'name': 'How to buy',
      'path': '',
      'fragment': 'how-to-buy'
    },
    {
      'name': 'MoonPaper',
      'externalPath': '/assets/files/moonpaper.pdf'
    },
    {
      'name': 'Community',
      'path': '/community',
      'frags': [
        {
          'name': 'MoonTV',
          'path': 'moon-tv'
        },
        {
          'name': 'MoonTicket',
          'path': 'moon-ticket'
        },
        {
          'name': 'Merchandise',
          'path': 'merchandise'
        },
        {
          'name': 'MoonGallery',
          'path': 'gallery'
        },
        {
          'name': 'Fuel the rocket',
          'path': 'merchandise'
        },
      ]
    },
    {
      'name': 'About us',
      'path': '/about',
      'frags': [
        {
          'name': 'Mission',
          'path': 'mission'
        },
        {
          'name': 'Mechanics',
          'path': 'mechanics'
        },
        {
          'name': 'Roadmap',
          'path': 'roadmap'
        },
      ]
    }
  ];

  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    this.atTop = (window.pageYOffset == 0) ? true : false;
  } 

  scrollToElement(page: string, fragment: string = null): void {

    if( fragment === null ) {
      if( location.pathname === page ) {
        const element = document.querySelector(`#${page.substr(1)}-page`)
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        this.open = false;
      } else {
        this._router.navigate( [page] );
      }
      
    } else {
      const element = document.querySelector(`#${fragment}`)
      if (element)  {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        this.open = false;
      } else
        this._router.navigate( [page], {fragment: fragment});
    }
  }

  constructor(
    private _router: Router, 
    private location: Location,
    private tokenomicsToggleService: TokenomicsToggleService
  ) { }

  ngOnInit(): void {
    
  }

  toggleTokenomics() {
    this.tokenomicsToggleService.doToggle();
    this.open = false;

    console.log('test');
  }

  isSamePath( path: string ): boolean {
    if( path != undefined ) {
      return location.pathname === path;
    }

    return false;
  }

}
