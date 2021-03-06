import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { FooterModule } from '../base/footer/footer.module';
import { CountdownModule } from 'ngx-countdown';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { VideoComponent } from './video/video.component';
import { PartnersComponent } from './partners/partners.component';
import { NewsComponent } from './news/news.component';
import { ExchangesComponent } from './exchanges/exchanges.component';
import { EconomyComponent } from './economy/economy.component';
import { InvestmentComponent } from './investment/investment.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NavigationModule } from '../base/navigation/navigation.module';
import { SidebarModule } from '../base/sidebar/sidebar.module';

import { SwiperModule } from 'swiper/angular';
import { CarouselModule } from 'ng-carousel-cdk';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ClipboardModule } from '@angular/cdk/clipboard';
import { PressComponent } from './press/press.component';
import { FooterMobileModule } from '../base/footer-mobile/footer-mobile.module';
import { MoonSwapComponent } from './moon-swap/moon-swap.component';



@NgModule({
  declarations: [
    LandingComponent,
    IntroComponent,
    AboutComponent,
    PartnersComponent,
    VideoComponent,
    NewsComponent,
    ExchangesComponent,
    EconomyComponent,
    InvestmentComponent,
    TutorialComponent,
    PressComponent,
    MoonSwapComponent,
  ],
  imports: [
    MatIconModule,
    CommonModule,
    NavigationModule,
    FooterModule,
    CountdownModule,
    AppRoutingModule,
    SidebarModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatSliderModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    ClipboardModule,
    FooterMobileModule,
    SwiperModule
  ]
})
export class LandingModule { }
