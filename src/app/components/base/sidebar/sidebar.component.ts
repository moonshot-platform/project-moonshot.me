import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  active = false;
  constructor() { }

  ngOnInit(): void {
  }

  tokenomics() {
    this.active = !this.active;
  }
  inactive() {
    this.active = false;
  }
}
