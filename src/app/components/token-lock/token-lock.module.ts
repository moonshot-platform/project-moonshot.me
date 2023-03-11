import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenLockComponent } from './token-lock.component';
import { FooterModule } from '../base/footer/footer.module';
import { CountdownModule } from 'ngx-countdown';
import { IntroComponent } from './intro/intro.component';
import { MoonlpComponent } from './moonlp/moonlp.component';
import { SidebarModule } from '../base/sidebar/sidebar.module';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NavigationModule } from '../base/navigation/navigation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TokenLockComponent,
    IntroComponent,
    MoonlpComponent,
  ],
  imports: [
    MatIconModule,
    CommonModule,
    FooterModule,
    CountdownModule,
    AppRoutingModule,
    SidebarModule,
    NavigationModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TokenLockModule { }
