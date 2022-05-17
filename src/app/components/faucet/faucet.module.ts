import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaucetComponent } from './faucet.component';
import { NavigationModule } from '../base/navigation/navigation.module';



@NgModule({
  declarations: [
    FaucetComponent,
  ],
  imports: [
    CommonModule,

    NavigationModule,
  ]
})
export class FaucetModule { }
