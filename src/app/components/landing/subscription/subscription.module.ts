import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionComponent } from './subscription.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { CarouselModule } from 'ng-carousel-cdk';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    SubscriptionComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatIconModule,
    CarouselModule
  ],
  exports: [
    SubscriptionComponent
  ]
})
export class SubscriptionModule { }
