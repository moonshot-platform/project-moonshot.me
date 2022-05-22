import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationModule } from '../base/navigation/navigation.module';
import { FormsModule } from '@angular/forms';
import { SidebarModule } from '../base/sidebar/sidebar.module';
import { VultureWhitelistComponent } from './vulture-whitelist.component';



@NgModule({
  declarations: [
    VultureWhitelistComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NavigationModule,
    SidebarModule
  ]
})
export class VultureWhitelistModule { }
