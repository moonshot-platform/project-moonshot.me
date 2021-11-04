import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { DetailComponent } from './detail/detail.component';
import { NavigationModule } from '../base/navigation/navigation.module';
import { SidebarModule } from '../base/sidebar/sidebar.module';
import { FooterMobileModule } from '../base/footer-mobile/footer-mobile.module';
import { FooterModule } from '../base/footer/footer.module';
import { ArticleListComponent } from './article-list/article-list.component';



@NgModule({
  declarations: [
    NewsComponent,
    DetailComponent,
    ArticleListComponent
  ],
  imports: [
    CommonModule,
    NavigationModule,
    SidebarModule,
    FooterMobileModule,
    FooterModule
  ]
})
export class NewsModule { }
