import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaucetComponent } from './faucet.component';
import { NavigationModule } from '../base/navigation/navigation.module';
import { FormsModule } from '@angular/forms';
import { SidebarModule } from '../base/sidebar/sidebar.module';



@NgModule({
  declarations: [
    FaucetComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NavigationModule,
    SidebarModule
  ]
})
export class FaucetModule { }
