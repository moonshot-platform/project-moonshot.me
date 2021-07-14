import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss', './../moonbase.component.scss', './../intro/intro.component.scss']
})
export class HistoryComponent implements OnInit {

  static readonly routeName: string = 'history';
  constructor() { }

  ngOnInit(): void {
  }

}
