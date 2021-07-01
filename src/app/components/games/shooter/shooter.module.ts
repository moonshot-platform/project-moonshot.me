import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShooterComponent } from './shooter.component';
import { SidebarModule } from '../../base/sidebar/sidebar.module';



@NgModule({
  declarations: [
    ShooterComponent
  ],
  imports: [
    CommonModule,
    SidebarModule
  ]
})
export class ShooterModule { }
