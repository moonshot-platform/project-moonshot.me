import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { FooterModule } from '../base/footer/footer.module';
import { CountdownModule } from 'ngx-countdown';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { TokenomicsComponent } from './tokenomics/tokenomics.component';
import { NgParticlesModule } from 'ng-particles';
import { PartnersComponent } from './partners/partners.component';
import { NewsComponent } from './news/news.component';
import { ExchangesComponent } from './exchanges/exchanges.component';
import { EconomyComponent } from './economy/economy.component';
import { InvestmentComponent } from './investment/investment.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NavigationModule } from './navigation/navigation.module';
import { RoadmapComponent } from './roadmap/roadmap.component';
// import { IvyCarouselModule } from 'angular-responsive-carousel';
import { IvyCarouselModule } from '../../ivyсarousel_pro/carousel.module';



@NgModule({
  declarations: [
    LandingComponent,
    IntroComponent,
    AboutComponent,
    TokenomicsComponent,
    PartnersComponent,
    NewsComponent,
    ExchangesComponent,
    EconomyComponent,
    InvestmentComponent,
    TutorialComponent,
    SidebarComponent,
    RoadmapComponent,
  ],
  imports: [
    MatIconModule,
    CommonModule,
    NavigationModule,
    FooterModule,
    CountdownModule,
    NgParticlesModule,
    AppRoutingModule,
    IvyCarouselModule
  ]
})
export class LandingModule { }
