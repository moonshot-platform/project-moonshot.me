import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { HeaderModule } from '../base/header/header.module';
import { FooterModule } from '../base/footer/footer.module';
import { CountdownModule } from 'ngx-countdown';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { TokenomicsComponent } from './tokenomics/tokenomics.component';
import { HowtoComponent } from './howto/howto.component';
import { NgParticlesModule } from 'ng-particles';
import { PartnersComponent } from './partners/partners.component';
import { PlansComponent } from './plans/plans.component';
import { NewsComponent } from './news/news.component';
import { ExchangesComponent } from './exchanges/exchanges.component';
import { EconomyComponent } from './economy/economy.component';
import { InvestmentComponent } from './investment/investment.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    LandingComponent,
    IntroComponent,
    AboutComponent,
    TokenomicsComponent,
    HowtoComponent,
    PartnersComponent,
    PlansComponent,
    NewsComponent,
    ExchangesComponent,
    EconomyComponent,
    InvestmentComponent,
    TutorialComponent,
    SidebarComponent,
  ],
  imports: [
    MatIconModule,
    CommonModule,
    HeaderModule,
    FooterModule,
    CountdownModule,
    NgParticlesModule
  ]
})
export class LandingModule { }
