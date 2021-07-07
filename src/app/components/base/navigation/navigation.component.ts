import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TokenomicsService } from 'src/app/services/tokenomics.service';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public atTop = true;
  public open = false;

  isMobile = this.deviceService.isMobile();
  isTablet = this.deviceService.isTablet();
  
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
      'onHover': false,
      'frags': [
        {
          'name': 'MoonTV',
          'path': 'moon-tv'
        },
        {
          'name': 'Fuel the rocket',
          'path': 'merchandise'
        },
        {
          'name': 'Merchandise',
          'path': 'merchandise'
        },
        {
          'name': 'MoonTicket',
          'path': 'ticket'
        },
        {
          'name': 'MoonGallery',
          'path': 'gallery'
        },
      ]
    },
    {
      'name': 'About us',
      'path': '/about',
      'onHover': false,
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
          'name': 'Security',
          'path': 'security'
        },
        {
          'name': 'Roadmap',
          'path': 'roadmap'
        },
        {
          'name': 'Team',
          'path': 'team'
        }
      ]
    }
  ];

  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    this.atTop = (window.pageYOffset == 0) ? true : false;
  } 

  scrollToElement(page: string, fragment: string = null,item:any = null): void {
    /* if(item !== null && (this.deviceService.isMobile || this.deviceService.isTablet())){
      
      this.navItems.filter((navItem)=>(navItem.name != item.name ? navItem.onHover = false : null ));
      
      if(item.onHover){
        this.jumpThere(page,fragment);
      }
      item.onHover = !item.onHover;
      return;
    }  */
    this.jumpThere(page,fragment);
    
  }

  jumpThere(page: string, fragment: string = null){
    if( fragment === null) {
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
    private tokenomicsService: TokenomicsService, 
    private deviceService: DeviceDetectorService
  ) { }

  ngOnInit(): void {
    
  }

  toggleTokenomics() {
    this.open = false;
    this.tokenomicsService.onToggle(false);
  }

  isSamePath( path: string ): boolean {
    if( path != undefined ) {
      return location.pathname === path;
    }

    return false;
  }

}
