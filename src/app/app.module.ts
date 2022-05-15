import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { NewsModule } from './components/news/news.module';
import { MoonticketPromoComponent } from './components/moonticket-promo/moonticket-promo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NightSkyComponent } from './components/night-sky/night-sky.component';
import { RabbitsMoonticketComponent } from './components/rabbits-moonticket/rabbits-moonticket.component';
import { WalletConnectComponent } from './components/base/wallet-connect/wallet-connect.component';
import { ToastrModule } from 'ngx-toastr';
import { LocalStorageService } from './services/local.storage.service';
import { WalletConnectModule } from './components/base/wallet-connect/wallet-connect.module';
import { VestingComponent } from './components/vesting/vesting.component';
import { UiSwitchModule } from 'ngx-ui-switch';
import { MoonseaBarComponent } from './components/base/moonsea-bar/moonsea-bar.component';

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
    MoonticketPromoComponent,
    NightSkyComponent,
    RabbitsMoonticketComponent,
    VestingComponent,
    MoonseaBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    SignModule,
    LandingModule,
    AboutModule,
    NewsModule,
    TokenLockModule,
    FormsModule,
    ReactiveFormsModule,
    CommunityModule,
    FooterModule,
    CountdownModule,
    BrowserAnimationsModule,
    ShooterModule,
    MatDialogModule,
    WalletConnectModule,
    ToastrModule.forRoot(
      { positionClass: 'toast-bottom-right' }
    ),
    GtagModule.forRoot({ trackingId: 'G-5Q9LF9T9Q6', trackPageviews: true }),
    UiSwitchModule.forRoot({
      // color: 'rgb(0, 189, 99)',
      switchColor: 'black',
      defaultBgColor: 'white',
      defaultBoColor: 'white',
    }),
  ],
  providers: [{ provide: CountdownGlobalConfig, useFactory: countdownConfigFactory },
  {
    provide: HAMMER_GESTURE_CONFIG,
    useClass: HammerConfig
  },

    LocalStorageService
  ],
  bootstrap: [AppComponent],
  exports: [
    FooterModule,
    FooterMobileModule,
    AppRoutingModule,
  ]
})
export class AppModule { }
