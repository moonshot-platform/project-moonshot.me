import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaucetComponent } from './faucet.component';
import { NavigationModule } from '../base/navigation/navigation.module';
import { FormsModule } from '@angular/forms';
import { SidebarModule } from '../base/sidebar/sidebar.module';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { FooterMobileModule } from '../base/footer-mobile/footer-mobile.module';


@NgModule({
  declarations: [
    FaucetComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NavigationModule,
    SidebarModule,
    ClipboardModule,
    FooterMobileModule,
  ]
})
export class FaucetModule { }
