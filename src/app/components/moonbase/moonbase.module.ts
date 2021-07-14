import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoonbaseRoutingModule } from './moonbase-routing.module';
import { MoonbaseComponent } from './moonbase.component';
import { NavModule } from './nav/nav.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { IntroComponent } from './intro/intro.component';
import { MatIconModule } from '@angular/material/icon';
import { NgParticlesModule } from 'ng-particles';
import { FooterComponent } from './footer/footer.component';
import { BuyMoonbaseComponent } from './buy-moonbase/buy-moonbase.component';
import { PrizePoolComponent } from './prize-pool/prize-pool.component';
import { FormsModule } from '@angular/forms';
import { HistoryComponent } from './history/history.component';


@NgModule({
  declarations: [
    MoonbaseComponent,
    SidebarComponent,
    IntroComponent,
    FooterComponent,
    BuyMoonbaseComponent,
    PrizePoolComponent,
    HistoryComponent
  ],
  imports: [
    MatIconModule,
    CommonModule,
    NgParticlesModule,
    MoonbaseRoutingModule,
    NavModule,
    FormsModule
  ]
})
export class MoonbaseModule { }
