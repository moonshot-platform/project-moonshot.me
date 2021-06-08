import { Component, HostListener, OnInit } from '@angular/core';

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
      'path': '/howtobuy'
    },
    {
      'name': 'Moonpaper',
      'path': '/moonpaper'
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

  constructor() { }

  ngOnInit(): void {
  }

}
