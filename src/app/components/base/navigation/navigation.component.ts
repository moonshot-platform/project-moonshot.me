import { Component, HostListener, OnInit } from '@angular/core';
import {Router} from '@angular/router';
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
      'name': 'MoonPaper',
      'externalPath': '/assets/files/moonpaper.pdf'
    },
    {
      'name': 'Community',
      'path': '/community',
      'frags': [
        {
          'name': 'MoonTV',
          'fragment': 'moon-tv'
        },
        {
          'name': 'MoonTicket',
          'fragment': 'moon-ticket'
        },
        {
          'name': 'Merchandise',
          'fragment': 'merchandise'
        },
        {
          'name': 'MoonGallery',
          'fragment': 'gallery'
        },
        {
          'name': 'MoonTV',
          'fragment': 'merchandise'
        },
      ]
    },
    {
      'name': 'About us',
      'path': '/about',
      'frags': [
        {
          'name': 'Mission',
          'fragment': 'mission'
        },
        {
          'name': 'Mechanics',
          'fragment': 'mechanics'
        },
        {
          'name': 'Roadmap',
          'fragment': 'roadmap'
        },
      ]
    }
  ];

  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    this.atTop = (window.pageYOffset == 0) ? true : false;
  } 

  scrollToElement(page: string, fragment: string): void {
    const element = document.querySelector(`#${fragment}`)
    if (element)  {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      this.open = false;
    } else
      this._router.navigate( [page], {fragment: fragment});
  }

  constructor(private _router: Router, private tokenomicsToggleService: TokenomicsToggleService) { }

  ngOnInit(): void {
  }

  toggleTokenomics() {
    this.tokenomicsToggleService.doToggle();
    this.open = false;
  }

}
