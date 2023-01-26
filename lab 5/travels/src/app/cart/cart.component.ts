import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { travels } from '../travels';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(private dataService: DataService) {}
  cost: number[] = [];

  data: any;
  calculateCost() {
    for (let index = 0; index < this.data.travels.length; index++) {
      const element = this.data.travels[index];
      this.cost[index] =
        element.price * (this.data.maxSeats[index] - element.seats);
    }
  }

  ngOnInit() {
    this.dataService.currentData.subscribe((data) => (this.data = data));
    this.cost = new Array<number>(this.data.travels.length);
    this.calculateCost();
  }
  buy(i: number) {
    this.data.bought[i] +=
      this.data.maxSeats[i] - this.data.travels[i].seats;
    this.data.counter -=
      this.data.maxSeats[i] - this.data.travels[i].seats;
    this.data.maxSeats[i] = this.data.travels[i].seats;
    this.calculateCost();
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    this.data.date[i] = yyyy + '-' + mm + '-' +dd
    this.dataService.changeCart(
      this.data.travels,
      this.data.maxSeats,
      this.data.counter,
      this.data.maxPrice,
      this.data.minPrice,
      this.data.ratings,
      this.data.bought,
      this.data.date
    );
  }
}
