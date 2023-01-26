import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Travel, travels } from './travels';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  nearTravels() {
    let near = 0;
    let currDate = new Date().getTime();
    for (let index = 0; index < travels.length; index++) {
      const element = travels[index];
      if (
        (new Date(element.startDate).getTime() - currDate) /
          (1000 * 3600 * 24) <
          30 &&
        this.bought[index] > 0
      )
        near++;
    }
    return near;
  }

  calculateCost() {
    let cost = 0;
    for (let index = 0; index < travels.length; index++) {
      const element = travels[index];
      cost += element.price * (this.maxSeats[index] - element.seats);
    }
    return cost;
  }
  constructor() {
    this.maxPrice = -1;
    this.minPrice = Infinity;
    for (let index = 0; index < travels.length; index++) {
      const element = travels[index];
      this.maxPrice = Math.max(this.maxPrice, element.price);
      this.minPrice = Math.min(this.minPrice, element.price);
      this.maxSeats.push(element.seats);
      this.ratings.push({ rating: 0, counter: 0 });
      this.bought.push(0);
      this.date.push(' ');
    }
    this.changeCart(
      travels,
      this.maxSeats,
      this.counter,
      this.maxPrice,
      this.minPrice,
      this.ratings,
      this.bought,
      this.date
    );
  }
  date: string[] = [];
  travels = travels;
  maxSeats: number[] = [];
  maxPrice: number = 0;
  minPrice: number = 0;
  ratings: { rating: number; counter: number }[] = [];
  counter = 0;
  bought: number[] = [];

  public editDataDetails: {
    travels: Travel[];
    maxSeats: number[];
    counter: number;
    maxPrice: number;
    minPrice: number;
    ratings: { rating: number; counter: number }[];
    bought: number[];
    cost: number;
    near: number;
    date: string[];
  } = {
    travels: travels,
    maxSeats: this.maxSeats,
    counter: this.counter,
    maxPrice: this.maxPrice,
    minPrice: this.minPrice,
    ratings: this.ratings,
    bought: this.bought,
    cost: this.calculateCost(),
    near: this.nearTravels(),
    date: this.date,
  };
  public subject = new Subject<any>();

  private dataSource = new BehaviorSubject(this.editDataDetails);
  currentData = this.dataSource.asObservable();
  changeCart(
    data: Travel[],
    data2: number[],
    data3: number,
    data4: number,
    data5: number,
    data6: { rating: number; counter: number }[],
    data7: number[],
    data8: string[],
  ) {
    this.dataSource.next({
      travels: data,
      maxSeats: data2,
      counter: data3,
      maxPrice: data4,
      minPrice: data5,
      ratings: data6,
      bought: data7,
      cost: this.calculateCost(),
      near: this.nearTravels(),
      date: data8,
    });
  }
}
