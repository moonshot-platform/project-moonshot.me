import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatIconModule,
  ],
  exports: [
    NavComponent
  ]
})
export class NavModule { }
