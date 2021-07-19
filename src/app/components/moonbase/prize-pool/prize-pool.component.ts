import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prize-pool',
  templateUrl: './prize-pool.component.html',
  styleUrls: ['./prize-pool.component.scss', './../moonbase.component.scss', './../intro/intro.component.scss']
})
export class PrizePoolComponent implements OnInit {

  static readonly routeName: string = 'prize_pool';
  constructor() { }

  ngOnInit(): void {
  }

}
