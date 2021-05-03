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
import { RoadmapComponent } from './roadmap/roadmap.component';
import { NgParticlesModule } from 'ng-particles';



@NgModule({
  declarations: [
    LandingComponent,
    IntroComponent,
    AboutComponent,
    TokenomicsComponent,
    FuelComponent,
    HowtoComponent,
    RoadmapComponent
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
