import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.scss']
})
export class PressComponent implements OnInit {

  pressList: any[] = [
    {
      'img': 'assets/media/images/press/Forbes_placeholder_yellow.svg',
      'whiteImg': 'assets/media/images/press/Forbes_placeholder_white.svg',
      hovered: false,
    },
    {
      'img': 'assets/media/images/press/Forbes_placeholder_yellow.svg',
      'whiteImg': 'assets/media/images/press/Forbes_placeholder_white.svg',
      hovered: false,
    },
    {
      'img': 'assets/media/images/press/U-Today_placeholder_yellow.svg',
      'whiteImg': 'assets/media/images/press/U-Today_placeholder_white.svg',
      hovered: false,
    },
    {
      'img': 'assets/media/images/press/U-Today_placeholder_yellow.svg',
      'whiteImg': 'assets/media/images/press/U-Today_placeholder_white.svg',
      hovered: false,
    },
    {
      'img': 'assets/media/images/press/Yahoo_placeholder_yellow.svg',
      'whiteImg': 'assets/media/images/press/Yahoo_placeholder_white.svg',
      hovered: false,
    },
    {
      'img': 'assets/media/images/press/Yahoo_placeholder_yellow.svg',
      'whiteImg': 'assets/media/images/press/Yahoo_placeholder_white.svg',
      hovered: false,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }


}
