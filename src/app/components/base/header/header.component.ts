import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public open = false;

  public navItems: any[] = [
    {
      'name': 'How to buy',
      'path': '#howtobuy'
    },
    {
      'name': 'Moonpaper',
      'path': '#moonpaper'
    },
    {
      'name': 'Community',
      'path': '#community'
    },
    {
      'name': 'About us',
      'path': '#about'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
