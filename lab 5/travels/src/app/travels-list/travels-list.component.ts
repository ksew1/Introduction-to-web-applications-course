import { Component, OnInit, ViewChild } from '@angular/core';
import { travels, Travel } from '../travels';
import { DataService } from '../data.service';

@Component({
  selector: 'app-travels-list',
  templateUrl: './travels-list.component.html',
  styleUrls: ['./travels-list.component.css'],
})
export class TravelsListComponent implements OnInit {
  data: any;
  orderedCounter = 0;
  travels: Travel[] = [];
  maxSeats: number[] = [];
  maxPrice: number = 0;
  minPrice: number = 0;
  filter = true;
  filterButtonText = 'wyłącz filtr';

  filterObject = {
    name: '',
    priceMin: 0,
    priceMax: Infinity,
    startDate: '1980-1-1',
    endDate: '2050-1-1',
    ratingMin: NaN,
    ratingMax: NaN,
    country: '',
  };

  ratings: { rating: number; counter: number }[] = [];
  @ViewChild('parent') parentRef: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.currentData.subscribe((data) => (this.data = data));
    this.ratings = this.data.ratings;
    this.maxPrice = this.data.maxPrice;
    this.minPrice = this.data.minPrice;
    this.filterObject.priceMax = this.maxPrice;
    this.filterObject.priceMin = this.minPrice;
    this.travels = this.data.travels;
    this.maxSeats = this.data.maxSeats;
    this.orderedCounter = this.data.counter;
  }

  changeFilter() {
    if (this.filter) {
      this.filterButtonText = 'włącz filtr';
    } else {
      this.filterButtonText = 'wyłącz filtr';
    }
    this.filter = !this.filter;
  }

  addFilterData(newTravel: any) {
    this.filterObject = newTravel;
  }

  deleteTravel(i: number) {
    const childElement = this.parentRef.nativeElement.children[i];
    const removedPrice = travels[i].price;

    childElement.remove();

    this.orderedCounter -= this.maxSeats[i] - this.travels[i].seats;
    this.travels.splice(i, 1);
    this.maxSeats.splice(i, 1);
    this.ratings.splice(i, 1);
    this.data.bought.splice(i, 1);
    this.data.date.splice(i, 1);

    if (removedPrice == this.maxPrice) {
      this.maxPrice = -1;
      for (let index = 0; index < travels.length; index++)
        this.maxPrice = Math.max(this.maxPrice, travels[index].price);
    } else if (removedPrice == this.minPrice) {
      this.minPrice = Infinity;
      for (let index = 0; index < travels.length; index++)
        this.minPrice = Math.min(this.minPrice, travels[index].price);
    }
    this.dataService.changeCart(
      this.travels,
      this.maxSeats,
      this.orderedCounter,
      this.maxPrice,
      this.minPrice,
      this.ratings,
      this.data.bought,
      this.data.date
    );
    this.travels = [...this.travels];
  }

  orderTravel(travel: Travel) {
    this.orderedCounter++;
    travel.seats--;
    this.dataService.changeCart(
      this.travels,
      this.maxSeats,
      this.orderedCounter,
      this.maxPrice,
      this.minPrice,
      this.ratings,
      this.data.bought,
      this.data.date
    );
  }
  resign(travel: Travel) {
    this.orderedCounter--;
    travel.seats++;
    this.dataService.changeCart(
      this.travels,
      this.maxSeats,
      this.orderedCounter,
      this.maxPrice,
      this.minPrice,
      this.ratings,
      this.data.bought,
      this.data.date
    );
  }
}
