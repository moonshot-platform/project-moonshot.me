import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { HeaderModule } from '../base/header/header.module';
import { FooterModule } from '../base/footer/footer.module';
import { CountdownModule } from 'ngx-countdown';



@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    CountdownModule
  ]
})
export class LandingModule { }
