import { Component, OnInit, ViewChild } from '@angular/core';
import { travels, Travel } from '../travels';
import { DataService } from '../data.service';

@Component({
  selector: 'app-travels-list',
  templateUrl: './travels-list.component.html',
  styleUrls: ['./travels-list.component.css'],
})
export class TravelsListComponent implements OnInit {
  displayForm = false
  orderedCounter = 0;
  travels = travels;
  maxSeats: number[] = [];
  maxPrice: number;
  minPrice: number;
  filter = true
  filterButtonText = "wyłącz filtr"

  filterObject = {name: "", priceMin: 0, priceMax: Infinity, startDate: "1980-1-1", endDate: "2050-1-1", ratingMin: NaN, ratingMax: NaN, country: ""}



  ratings: { rating: number; counter: number }[] = [];
  @ViewChild('parent') parentRef: any;
  otherValues = new Map();
  constructor(private dataService: DataService) {
    this.maxPrice = -1;
    this.minPrice = Infinity;
    for (let index = 0; index < travels.length; index++) {
      const element = travels[index];
      this.maxPrice = Math.max(this.maxPrice, element.price);
      this.minPrice = Math.min(this.minPrice, element.price);
      this.otherValues.set(element.name, {maxSeats: element.seats, rating: 0, counter: 0})
      this.maxSeats.push(element.seats);
      this.ratings.push({ rating: 0, counter: 0 });
    }
  }

  ngOnInit(): void {
    this.filterObject.priceMax = this.maxPrice
    this.filterObject.priceMin = this.minPrice
    this.dataService.changeCart(this.travels, this.maxSeats, this.orderedCounter)
  }

  closeForm() {
    this.displayForm=false
  }

  addForm() {
    this.displayForm = true
  }

  changeFilter() {
    if (this.filter) {
      this.filterButtonText = "włącz filtr"

    } else {
      this.filterButtonText = "wyłącz filtr"

    }
    this.filter = !this.filter

  }

  addFormData(newTravel : Travel) {
    this.displayForm = false
    this.maxPrice = Math.max(newTravel.price, this.maxPrice)
    this.minPrice = Math.min(newTravel.price, this.minPrice)
    this.ratings.push({rating: 0, counter: 0})
    this.maxSeats.push(newTravel.seats)
    this.travels.push(newTravel)
  }
  addFilterData(newTravel : any) {
    this.filterObject = newTravel
  }

  addRatingData(newRating: number, i: number) {
    this.ratings[i].rating += newRating;
    this.ratings[i].counter++;
  }
  deleteTravel(i: number) {
    const childElement = this.parentRef.nativeElement.children[i];
    const removedPrice = travels[i].price;

    childElement.remove();

    this.orderedCounter -= this.maxSeats[i] - this.travels[i].seats;
    this.travels.splice(i, 1);
    this.maxSeats.splice(i, 1);
    this.ratings.splice(i, 1);

    if (removedPrice == this.maxPrice) {
      this.maxPrice = -1;
      for (let index = 0; index < travels.length; index++)
        this.maxPrice = Math.max(this.maxPrice, travels[index].price);
    } else if (removedPrice == this.minPrice) {
      this.minPrice = Infinity;
      for (let index = 0; index < travels.length; index++)
        this.minPrice = Math.min(this.minPrice, travels[index].price);
    }
    this.dataService.changeCart(this.travels, this.maxSeats, this.orderedCounter)
    this.travels = [...this.travels]
  }

  orderTravel(travel: Travel) {
    this.orderedCounter++;
    travel.seats--;
    this.dataService.changeCart(this.travels, this.maxSeats, this.orderedCounter)
  }
  resign(travel: Travel) {
    this.orderedCounter--;
    travel.seats++;
    this.dataService.changeCart(this.travels, this.maxSeats, this.orderedCounter)
  }
}
