import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelsListComponent } from './travels-list/travels-list.component';
import { TravelRatingComponent } from './travel-rating/travel-rating.component';
import { TravelFormComponent } from './travel-form/travel-form.component';
import { CartComponent } from './cart/cart.component';
import { SearchPipePipe } from './search-pipe.pipe';
import { FilterComponent } from './filter/filter.component';
import { HomeComponent } from './home/home.component';
import { TravelComponent } from './travel/travel.component';
import { RatingFormComponent } from './rating-form/rating-form.component';
import { HistoryComponent } from './history/history.component';
import { HistoryPipe } from './history.pipe';
import { HistoryFilterComponent } from './history-filter/history-filter.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TravelsListComponent,
    TravelRatingComponent,
    TravelFormComponent,
    CartComponent,
    SearchPipePipe,
    FilterComponent,
    HomeComponent,
    TravelComponent,
    RatingFormComponent,
    HistoryComponent,
    HistoryPipe,
    HistoryFilterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
