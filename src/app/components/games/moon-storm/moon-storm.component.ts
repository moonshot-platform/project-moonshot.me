import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moon-storm',
  templateUrl: './moon-storm.component.html',
  styleUrls: ['./moon-storm.component.scss']
})
export class MoonStormComponent implements OnInit {

  static readonly routeName: string = 'games/moonstorm';

  constructor() { }

  ngOnInit(): void {
  }

}
