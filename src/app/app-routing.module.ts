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
import { RabbitsMoonticketComponent } from './components/rabbits-moonticket/rabbits-moonticket.component';
import { TutorialComponent } from './components/landing/tutorial/tutorial.component';
import { VestingComponent } from './components/vesting/vesting.component';
import { FaucetComponent } from './components/faucet/faucet.component';
import { MoonStormComponent } from './components/games/moon-storm/moon-storm.component';
import { VultureWhitelistComponent } from './components/vulture-whitelist/vulture-whitelist.component';

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
    path: MoonStormComponent.routeName,
    component: MoonStormComponent
  },
  {
    path: VultureWhitelistComponent.routeName,
    component: VultureWhitelistComponent
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
