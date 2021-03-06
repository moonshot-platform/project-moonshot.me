import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  current = 0;

  public items: any = [
    'tab1',
    'tab2',
    'tab3'
  ]

  constructor() { }

  ngOnInit(): void {

  }

  next() {
    this.current = this.current < this.items.length - 1 ? this.current + 1 : 0;
  }

  prev() {
      this.current = this.current > 0 ? this.current - 1 : this.items.length - 1;
  }

}
