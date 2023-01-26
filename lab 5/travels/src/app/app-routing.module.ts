import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { TravelFormComponent } from './travel-form/travel-form.component';
import { TravelsListComponent } from './travels-list/travels-list.component';
import { TravelComponent } from './travel/travel.component';
import { HistoryComponent } from './history/history.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'form', component: TravelFormComponent },
  { path: 'travels', component: TravelsListComponent },
  { path: 'travels/:id', component: TravelComponent },
  { path: 'cart', component: CartComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'form', component: TravelFormComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
