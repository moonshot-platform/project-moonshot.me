import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoadmapComponent } from './roadmap.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { CarouselModule } from 'ng-carousel-cdk';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    RoadmapComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatIconModule,
    CarouselModule
  ],
  exports: [
    RoadmapComponent
  ]
})
export class RoadmapModule { }
