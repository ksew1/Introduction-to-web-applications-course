import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { FireStoreService } from '../fire-store.service';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-travels-list',
  templateUrl: './travels-list.component.html',
  styleUrls: ['./travels-list.component.css'],
})
export class TravelsListComponent implements OnInit {
  data: any;
  orderedCounter = 0;
  travels: any = [];
  maxPrice: number = 0;
  minPrice: number = 0;
  filter = true;
  filterButtonText = 'wyłącz filtr';
  user: any;

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

  @ViewChild('parent') parentRef: any;

  constructor(
    private dataService: DataService,
    private fireService: FireStoreService,
    private userService: RoleService,

  ) {}

  findMaxAndMin(travels: any) {
    this.maxPrice = -1;
    this.minPrice = Infinity;
    for (let index = 0; index < travels.length; index++) {
      const element = travels[index];
      this.maxPrice = Math.max(this.maxPrice, element.price);
      this.minPrice = Math.min(this.minPrice, element.price);
    }
    return travels;
  }

  ngOnInit(): void {
    this.dataService.currentData.subscribe((data) => (this.data = data));
    this.fireService.currentData.subscribe(
      (data) => (this.travels = this.findMaxAndMin(data))
    );

    this.userService.currentData.subscribe((data) => (this.user = data));

    this.filterObject.priceMax = this.maxPrice;
    this.filterObject.priceMin = this.minPrice;

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



  orderTravel(travel: any) {
    console.warn(this.user.ordered.quantity != travel.maxSeats);

    console.warn(travel.maxSeats);
    console.warn(this.user.ordered[travel.id]);

    this.orderedCounter++;
    travel.seats--;
    let diff;
    if (travel.id in this.user.ordered) {
      diff = this.user.ordered[travel.id].quantity + 1;
    } else {
      diff = 1;
    }
    this.userService.updateData('users', this.user.email, {
      ordered: { ...this.user.ordered, [travel.id]: { quantity: diff } },
    });
    this.dataService.changeCart(this.travels, this.orderedCounter);
  }
  resign(travel: any) {
    this.orderedCounter--;
    travel.seats++;
    let diff;
    if (travel.id in this.user.ordered) {
      diff = this.user.ordered[travel.id].quantity - 1;
    }
    this.userService.updateData('users', this.user.email, {
      ordered: { ...this.user.ordered, [travel.id]: { quantity: diff } },
    });
    this.dataService.changeCart(this.travels, this.orderedCounter);
  }
}
