import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationModule } from '../base/navigation/navigation.module';
import { FormsModule } from '@angular/forms';
import { SidebarModule } from '../base/sidebar/sidebar.module';
import { VultureWhitelistComponent } from './vulture-whitelist.component';
import { FooterMobileModule } from '../base/footer-mobile/footer-mobile.module';



@NgModule({
  declarations: [
    VultureWhitelistComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NavigationModule,
    SidebarModule,
    FooterMobileModule
  ]
})
export class VultureWhitelistModule { }
