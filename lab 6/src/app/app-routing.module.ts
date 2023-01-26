import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { TravelFormComponent } from './travel-form/travel-form.component';
import { TravelsListComponent } from './travels-list/travels-list.component';
import { TravelComponent } from './travel/travel.component';
import { HistoryComponent } from './history/history.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { TripManagerComponent } from './trip-manager/trip-manager.component';
import { AuthGuard } from './guard/auth.guard';
import { AdminGuard } from './guard/admin.guard';
import { MenagerGuard } from './guard/menager.guard';
import { NotLogInGuard } from './guard/not-log-in.guard';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'trip',
    component: TripManagerComponent, canActivate: [MenagerGuard]

  },
  { path: 'singup', component: SingUpComponent, canActivate: [NotLogInGuard] },
  { path: 'singin', component: SingInComponent, canActivate: [NotLogInGuard] },
  { path: 'admin', component: AdminViewComponent, canActivate: [AdminGuard] },
  { path: 'travels', component: TravelsListComponent },
  { path: 'travels/:id', component: TravelComponent, canActivate: [AuthGuard] },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'history', component: HistoryComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
