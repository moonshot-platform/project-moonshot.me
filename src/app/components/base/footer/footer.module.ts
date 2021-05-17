import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { CommunityComponent } from '../../landing/community/community.component';
import { DisclaimerComponent } from '../../landing/disclaimer/disclaimer.component';



@NgModule({
  declarations: [
    FooterComponent,
    CommunityComponent,
    DisclaimerComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FooterComponent,
  ]
})
export class FooterModule { }
