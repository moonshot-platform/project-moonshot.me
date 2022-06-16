import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoonStormComponent } from './moon-storm/moon-storm.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MoonStormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class GamesModule { }
