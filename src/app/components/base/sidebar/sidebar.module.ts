import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { MatIconModule } from '@angular/material/icon';
import { TokenomicsComponent } from '../tokenomics/tokenomics.component';
import { UiSwitchModule } from 'ngx-ui-switch';
import { MoonbaseBarComponent } from '../moonbase-bar/moonbase-bar.component';
import { ReleaseBarComponent } from '../release-bar/release-bar.component';
import { MiningBarComponent } from '../mining-bar/mining-bar.component';
import { MoonseaBarComponent } from '../moonsea-bar/moonsea-bar.component';
import { ClipboardModule } from '@angular/cdk/clipboard';

@NgModule({
  declarations: [
    SidebarComponent,
    TokenomicsComponent,
    MoonbaseBarComponent,
    ReleaseBarComponent,
    MiningBarComponent,
    MoonseaBarComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatIconModule,
    ClipboardModule,
    UiSwitchModule.forRoot({
      color: 'rgb(0, 189, 99)',
      switchColor: 'black',
      defaultBgColor: 'transparent',
      defaultBoColor: 'black',
    }),
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
