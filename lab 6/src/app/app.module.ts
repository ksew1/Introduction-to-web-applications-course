import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/compat/database';


import { FormsModule } from '@angular/forms';




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
import { HistoryFilterComponent } from './history-filter/history-filter.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { SingInComponent } from './sing-in/sing-in.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { AccountComponent } from './account/account.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { TripManagerComponent } from './trip-manager/trip-manager.component';


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
    HistoryFilterComponent,
    NotFoundComponent,
    SingInComponent,
    SingUpComponent,
    AccountComponent,
    AdminViewComponent,
    TripManagerComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
