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
      'name': 'About',
      'path': '#about'
    },
    {
      'name': 'Tokenomics',
      'path': '#tokenomics'
    },
    {
      'name': 'Fuel the rocket',
      'path': '#fueltherocket'
    },
    {
      'name': 'Ticket',
      'path': '#ticket'
    },
    {
      'name': 'How to buy',
      'path': '#howtobuy'
    },
    {
      'name': 'Roadmap',
      'path': '#roadmap'
    },
    {
      'name': 'MoonTV',
      'path': '#moontv'
    },
    {
      'name': 'Gallery',
      'path': '#gallery'
    },
    {
      'name': 'launch',
      'path': '#launch',
      'class': 'pri'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
