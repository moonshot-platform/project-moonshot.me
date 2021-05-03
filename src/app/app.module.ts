import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgParticlesModule } from "ng-particles";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './components/base/footer/footer.module';
import { HeaderModule } from './components/base/header/header.module';
import { LandingModule } from './components/landing/landing.module';
import { SignModule } from './components/sign/sign.module';
import { CountdownConfig, CountdownGlobalConfig, CountdownModule } from 'ngx-countdown';

export function countdownConfigFactory(): CountdownConfig {
  return {};
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SignModule,
    LandingModule,
    HeaderModule,
    FooterModule,
    CountdownModule,
    NgParticlesModule
  ],
  providers: [{ provide: CountdownGlobalConfig, useFactory: countdownConfigFactory }],
  bootstrap: [AppComponent],
  exports: [
    HeaderModule,
    FooterModule,
    AppRoutingModule
  ]
})
export class AppModule { }
