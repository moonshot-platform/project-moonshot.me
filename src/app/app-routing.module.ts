import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { AboutComponent } from './components/about/about.component';
import { TokenLockComponent } from './components/token-lock/token-lock.component';
import { CommunityComponent } from './components/community/community.component';
import { MoonbaseComponent } from './components/moonbase/moonbase.component';
import { BuyMoonbaseComponent } from './components/moonbase/buy-moonbase/buy-moonbase.component';
import { PrizePoolComponent } from './components/moonbase/prize-pool/prize-pool.component';
import { HistoryComponent } from './components/moonbase/history/history.component';
import { ShooterComponent } from './components/games/shooter/shooter.component';

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
    path: MoonbaseComponent.routeName,
    component: MoonbaseComponent
  },
  {
    path: BuyMoonbaseComponent.routeName,
    component: BuyMoonbaseComponent
  },
  {
    path: PrizePoolComponent.routeName,
    component: PrizePoolComponent
  },
  {
    path: HistoryComponent.routeName,
    component: HistoryComponent
  },
  {
    path: ShooterComponent.routeName,
    component: ShooterComponent
  },
//   {
//     path: 'moonbase',
//     loadChildren: () => import('./components/moonbase/moonbase.module').then(m => m.MoonbaseModule)
// },
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
