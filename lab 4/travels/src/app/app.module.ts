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

@NgModule({
  declarations: [
    AppComponent,
    TravelsListComponent,
    TravelRatingComponent,
    TravelFormComponent,
    CartComponent,
    SearchPipePipe,
    FilterComponent
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
