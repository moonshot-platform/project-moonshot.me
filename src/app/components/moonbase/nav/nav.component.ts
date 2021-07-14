import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public open = false;

  public navItems: any[] = [
    {
      'name': 'MoonBoxes',
      'path': '/moonbase'
    },
    {
      'name': 'MoonLottery',
      'path': '/history',
      // 'path': '/moonpaper'
    },
    {
      'name': 'MoonArcade',
      'path': '/community'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
