import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merchandise',
  templateUrl: './merchandise.component.html',
  styleUrls: ['./merchandise.component.scss']
})
export class MerchandiseComponent implements OnInit {

  current = 0;

  public shirts: any = [
    'assets/media/images/community/shop-bear.png',
    'assets/media/images/community/shop-bull.png',
    'assets/media/images/community/shop-moonbirb.png'
  ]

  constructor() { }

  ngOnInit(): void {
  }

  next() {
      this.current = this.current < this.shirts.length - 1 ? this.current + 1 : 0;
  }

  prev() {
      this.current = this.current > 0 ? this.current - 1 : this.shirts.length - 1;
  }

}
