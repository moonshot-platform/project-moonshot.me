import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunityComponent } from './community.component';
import { FooterModule } from '../base/footer/footer.module';
import { CountdownModule } from 'ngx-countdown';
import { IntroComponent } from './intro/intro.component';
import { NgParticlesModule } from 'ng-particles';
import { GalleryComponent } from './gallery/gallery.component';
import { MoontvComponent } from './moontv/moontv.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { MoonticketComponent } from './moonticket/moonticket.component';
import { SidebarModule } from '../landing/sidebar/sidebar.module';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NavigationModule } from '../landing/navigation/navigation.module';
import { RoadmapModule } from '../landing/roadmap/roadmap.module';



@NgModule({
  declarations: [
    CommunityComponent,
    IntroComponent,
    GalleryComponent,
    MoontvComponent,
    SubscriptionComponent,
    MoonticketComponent,
  ],
  imports: [
    MatIconModule,
    CommonModule,
    NavigationModule,
    FooterModule,
    CountdownModule,
    NgParticlesModule,
    AppRoutingModule,
    SidebarModule,
    RoadmapModule
  ]
})
export class CommunityModule { }
