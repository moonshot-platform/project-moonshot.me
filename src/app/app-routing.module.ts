import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { AboutComponent } from './components/about/about.component';
import { TokenLockComponent } from './components/token-lock/token-lock.component';
import { CommunityComponent } from './components/community/community.component';
import { MoonticketPromoComponent } from './components/moonticket-promo/moonticket-promo.component';
import { NightSkyComponent } from './components/night-sky/night-sky.component';
import { RabbitsMoonticketComponent } from './components/rabbits-moonticket/rabbits-moonticket.component';
import { TutorialComponent } from './components/landing/tutorial/tutorial.component';
import { VestingComponent } from './components/vesting/vesting.component';
import { FaucetComponent } from './components/faucet/faucet.component';

const routes: Routes = [
  {
    path: LandingComponent.routeName,
    component: LandingComponent,
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
    path: MoonticketPromoComponent.routeName,
    component: MoonticketPromoComponent
  },
  {
    path: NightSkyComponent.routeName,
    component: NightSkyComponent
  },
  {
    path: RabbitsMoonticketComponent.routeName,
    component: RabbitsMoonticketComponent
  },
  {
    path: VestingComponent.routeName,
    component: VestingComponent
  },
  {
    path: FaucetComponent.routeName,
    component: FaucetComponent
  },
  {
    path: TutorialComponent.anchorName,
    component: LandingComponent,
    data: { anchor: TutorialComponent.anchorName }
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
