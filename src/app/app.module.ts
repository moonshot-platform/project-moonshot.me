import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgParticlesModule } from "ng-particles";

import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './components/base/footer/footer.module';
import { LandingModule } from './components/landing/landing.module';
import { AboutModule } from './components/about/about.module';
import { CommunityModule } from './components/community/community.module';
import { SignModule } from './components/sign/sign.module';
import { CountdownConfig, CountdownGlobalConfig, CountdownModule } from 'ngx-countdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './components/base/header/header.module';

export function countdownConfigFactory(): CountdownConfig {
  return {};
}

import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

export class HammerConfig extends HammerGestureConfig {
  overrides = <any>{
    'swipe': { direction: Hammer.DIRECTION_ALL }
  };
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    SignModule,
    LandingModule,
    AboutModule,
    CommunityModule,
    FooterModule,
    CountdownModule,
    NgParticlesModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: CountdownGlobalConfig, useFactory: countdownConfigFactory },
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerConfig
    }],
  bootstrap: [AppComponent],
  exports: [
    FooterModule,
    HeaderModule,
    AppRoutingModule
  ]
})
export class AppModule { }
