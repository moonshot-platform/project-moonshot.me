import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { NavigationModule } from '../base/navigation/navigation.module';
import { SidebarModule } from '../base/sidebar/sidebar.module';
import { FooterMobileModule } from '../base/footer-mobile/footer-mobile.module';
import { FooterModule } from '../base/footer/footer.module';
import { ArticleListComponent } from './article-list/article-list.component';
import { MatIconModule } from '@angular/material/icon';
import { ShareModalComponent } from './share-modal/share-modal.component';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
@NgModule({
  declarations: [
    NewsComponent,
    ArticleListComponent,
    ShareModalComponent
  ],
  imports: [
    CommonModule,
    NavigationModule,
    SidebarModule,
    FooterMobileModule,
    FooterModule,
    ShareButtonsModule,
    ShareIconsModule,
    MatIconModule,
  ]
})
export class NewsModule { }
