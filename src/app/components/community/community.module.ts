import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunityComponent } from './community.component';
import { FooterModule } from '../base/footer/footer.module';
import { CountdownModule } from 'ngx-countdown';
import { IntroComponent } from './intro/intro.component';
import { NgParticlesModule } from 'ng-particles';
import { GalleryComponent } from './gallery/gallery.component';
import { MoontvComponent } from './moontv/moontv.component';
import { MoonticketComponent } from './moonticket/moonticket.component';
import { SidebarModule } from '../landing/sidebar/sidebar.module';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RoadmapModule } from '../landing/roadmap/roadmap.module';
import { MerchandiseModule } from '../landing/merchandise/merchandise.module';
import { NavigationModule } from '../base/navigation/navigation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CommunityComponent,
    IntroComponent,
    GalleryComponent,
    MoontvComponent,
    MoonticketComponent,
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
    MerchandiseModule,
    NavigationModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CommunityModule { }
