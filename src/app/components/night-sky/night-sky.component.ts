import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-night-sky',
  templateUrl: './night-sky.component.html',
  styleUrls: ['./night-sky.component.scss']
})
export class NightSkyComponent implements OnInit {
  static readonly routeName: string = 'night-sky';

  constructor() { }

  ngOnInit(): void {
  }

}
