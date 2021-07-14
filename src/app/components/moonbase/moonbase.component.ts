import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moonbase',
  templateUrl: './moonbase.component.html',
  styleUrls: ['./moonbase.component.scss']
})
export class MoonbaseComponent implements OnInit {

  static readonly routeName: string = 'moonbase';
  constructor() { }

  ngOnInit(): void {
  }

}
