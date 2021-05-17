import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { HeaderModule } from '../base/header/header.module';
import { FooterModule } from '../base/footer/footer.module';
import { CountdownModule } from 'ngx-countdown';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { TokenomicsComponent } from './tokenomics/tokenomics.component';
import { FuelComponent } from './fuel/fuel.component';
import { HowtoComponent } from './howto/howto.component';
import { NgParticlesModule } from 'ng-particles';
import { PartnersComponent } from './partners/partners.component';
import { PlansComponent } from './plans/plans.component';



@NgModule({
  declarations: [
    LandingComponent,
    IntroComponent,
    AboutComponent,
    TokenomicsComponent,
    FuelComponent,
    HowtoComponent,
    PartnersComponent,
    PlansComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    CountdownModule,
    NgParticlesModule
  ]
})
export class LandingModule { }
