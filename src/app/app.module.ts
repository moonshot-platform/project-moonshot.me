import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgParticlesModule } from "ng-particles";

import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './components/base/footer/footer.module';
import { LandingModule } from './components/landing/landing.module';
import { AboutModule } from './components/about/about.module';
import { TokenLockModule } from './components/token-lock/token-lock.module';
import { CommunityModule } from './components/community/community.module';
import { SignModule } from './components/sign/sign.module';
import { CountdownConfig, CountdownGlobalConfig, CountdownModule } from 'ngx-countdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export function countdownConfigFactory(): CountdownConfig {
  return {};
}

import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { ShooterModule } from './components/games/shooter/shooter.module';
import { SpaceInvaderComponent } from './components/games/space-invader/space-invader.component';
import { GtagModule } from 'angular-gtag';
import { FooterMobileModule } from './components/base/footer-mobile/footer-mobile.module';
@Injectable()
export class HammerConfig extends HammerGestureConfig {
  overrides = <any>{
    'swipe': { direction: Hammer.DIRECTION_ALL }
  };
}

@NgModule({
  declarations: [
    AppComponent,
    SpaceInvaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    SignModule,
    LandingModule,
    AboutModule,
    TokenLockModule,
    CommunityModule,
    FooterModule,
    CountdownModule,
    NgParticlesModule,
    BrowserAnimationsModule,
    ShooterModule,
    MatDialogModule,
    GtagModule.forRoot({ trackingId: 'G-5Q9LF9T9Q6', trackPageviews: true }),
  ],
  providers: [{ provide: CountdownGlobalConfig, useFactory: countdownConfigFactory },
  {
    provide: HAMMER_GESTURE_CONFIG,
    useClass: HammerConfig
  }],
  bootstrap: [AppComponent],
  exports: [
    FooterModule,
    FooterMobileModule,
    AppRoutingModule
  ]
})
export class AppModule { }
