import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { FooterModule } from '../base/footer/footer.module';
import { CountdownModule } from 'ngx-countdown';
import { IntroComponent } from './intro/intro.component';
import { SecurityComponent } from './security/security.component';
import { MissionComponent } from './mission/mission.component';
import { MechanicsComponent } from './mechanics/mechanics.component';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SidebarModule } from '../base/sidebar/sidebar.module';
import { NavigationModule } from '../base/navigation/navigation.module';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { TeamComponent } from './team/team.component';
import { MembersComponent } from './team/members/members.component';
import { FooterMobileModule } from '../base/footer-mobile/footer-mobile.module';



@NgModule({
  declarations: [
    AboutComponent,
    IntroComponent,
    SecurityComponent,
    MissionComponent,
    MechanicsComponent,
    DisclaimerComponent,
    TeamComponent,
    MembersComponent,
  ],
  imports: [
    MatIconModule,
    CommonModule,
    FooterModule,
    CountdownModule,
    AppRoutingModule,
    SidebarModule,
    NavigationModule,
    FooterMobileModule
  ]
})
export class AboutModule { }
