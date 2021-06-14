import { Component, HostListener, OnInit } from '@angular/core';
import {Router} from '@angular/router';

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
      'name': 'Moonpaper',
      'externalPath': '/assets/files/moonpaper.pdf'
    },
    {
      'name': 'Community',
      'path': '/community'
    },
    {
      'name': 'About us',
      'path': '/about'
    }
  ];

  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    this.atTop = (window.pageYOffset == 0) ? true : false;
  } 

  scrollToElement(): void {
    const element = document.querySelector("#how-to-buy")
    if (element)  {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      this.open = false;
    } else
      this._router.navigate( ['/'], {fragment: 'how-to-buy'});
  }

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

}
