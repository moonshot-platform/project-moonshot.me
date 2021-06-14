import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { CommunityComponent } from '../../landing/community/community.component';
import { DisclaimerComponent } from '../../landing/disclaimer/disclaimer.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    FooterComponent,
    CommunityComponent,
    DisclaimerComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    FooterComponent,
  ]
})
export class FooterModule { }
