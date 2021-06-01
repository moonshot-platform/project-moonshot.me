import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss']
})
export class RoadmapComponent implements OnInit {

  selectedIndex: number = 0;


  // next() {
  //     this.myCarousel.next();
  // }

  // previous() {
  //     this.myCarousel.prev();
  // }

  ngAfterViewInit() {
    
  }

  ngOnInit(): void {
  }

}
