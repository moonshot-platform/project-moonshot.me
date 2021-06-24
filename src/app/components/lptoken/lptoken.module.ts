import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LptokenComponent } from './lptoken.component';
import { FooterModule } from '../base/footer/footer.module';
import { CountdownModule } from 'ngx-countdown';
import { IntroComponent } from './intro/intro.component';
import { NgParticlesModule } from 'ng-particles';
import { MoonlpComponent } from './moonlp/moonlp.component';
import { SidebarModule } from '../base/sidebar/sidebar.module';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RoadmapModule } from '../about/roadmap/roadmap.module';
import { NavigationModule } from '../base/navigation/navigation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LptokenComponent,
    IntroComponent,
    MoonlpComponent,
  ],
  imports: [
    MatIconModule,
    CommonModule,
    FooterModule,
    CountdownModule,
    NgParticlesModule,
    AppRoutingModule,
    SidebarModule,
    RoadmapModule,
    NavigationModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LptokenModule { }
