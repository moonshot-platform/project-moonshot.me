import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { MatIconModule } from '@angular/material/icon';
import { TokenomicsComponent } from '../tokenomics/tokenomics.component';

@NgModule({
  declarations: [
    SidebarComponent,
    TokenomicsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatIconModule,
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
