import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MerchandiseComponent } from './merchandise.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { CarouselModule } from 'ng-carousel-cdk';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MerchandiseComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatIconModule,
    CarouselModule,
    FormsModule
  ],
  exports: [
    MerchandiseComponent
  ]
})
export class MerchandiseModule { }
