import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  // {
  //   path: LandingComponent.routeName,
  //   component: LandingComponent
  // },
  {
    path: AboutComponent.routeName,
    component: AboutComponent
  },
  // { path: '**', redirectTo: AboutComponent.routeName }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
