import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { AboutComponent } from './components/about/about.component';
import { TokenLockComponent } from './components/token-lock/token-lock.component';
import { CommunityComponent } from './components/community/community.component';
import { ShooterComponent } from './components/games/shooter/shooter.component';
import { NewsComponent } from './components/news/news.component';
import { MoonticketPromoComponent } from './components/moonticket-promo/moonticket-promo.component';
import { NightSkyComponent } from './components/night-sky/night-sky.component';

const routes: Routes = [
  {
    path: LandingComponent.routeName,
    component: LandingComponent
  },
  {
    path: AboutComponent.routeName,
    component: AboutComponent
  },
  {
    path: TokenLockComponent.routeName,
    component: TokenLockComponent
  },
  {
    path: CommunityComponent.routeName,
    component: CommunityComponent
  },
  {
    path: NewsComponent.routeName,
    component: NewsComponent
  },
  {
    path: ShooterComponent.routeName,
    component: ShooterComponent
  },
  {
    path: MoonticketPromoComponent.routeName,
    component: MoonticketPromoComponent
  },
  {
    path: NightSkyComponent.routeName,
    component: NightSkyComponent
  },
  { path: '**', redirectTo: LandingComponent.routeName }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    useHash: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
