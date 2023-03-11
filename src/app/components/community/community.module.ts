import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunityComponent } from './community.component';
import { FooterModule } from '../base/footer/footer.module';
import { CountdownModule } from 'ngx-countdown';
import { IntroComponent } from './intro/intro.component';
import { MoontvComponent } from './moontv/moontv.component';
import { MoonticketComponent } from './moonticket/moonticket.component';
import { SidebarModule } from '../base/sidebar/sidebar.module';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NavigationModule } from '../base/navigation/navigation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterMobileModule } from '../base/footer-mobile/footer-mobile.module';



@NgModule({
  declarations: [
    CommunityComponent,
    IntroComponent,
    MoontvComponent,
    MoonticketComponent
  ],
  imports: [
    MatIconModule,
    CommonModule,
    FooterModule,
    CountdownModule,
    AppRoutingModule,
    SidebarModule,
    NavigationModule,
    FormsModule,
    ReactiveFormsModule,
    FooterMobileModule
  ]
})
export class CommunityModule { }
