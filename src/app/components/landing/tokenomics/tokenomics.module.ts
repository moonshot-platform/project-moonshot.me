import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { MatIconModule } from '@angular/material/icon';
import { TokenomicsComponent } from './tokenomics.component';

@NgModule({
  declarations: [
    TokenomicsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatIconModule,
  ],
  exports: [
    TokenomicsComponent
  ]
})
export class TokenomicsModule { }
