import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { RoleService } from './role.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  user: any;
  nearTravels() {
    let near = 0;
    let currDate = new Date().getTime();
    for (let index = 0; index < this.travels.length; index++) {
      const element = this.travels[index];

      if (
        (new Date(element.startDate).getTime() - currDate) /
          (1000 * 3600 * 24) <
          30 &&
        this.user.bought[element.id] != null &&
        this.user.bought[element.id].quantity > 0
      )


        near += 1
        console.error(near)
    }
    return near;
  }

  calculateCost() {
    let cost = 0;
    for (let index = 0; index < this.travels.length; index++) {
      const element = this.travels[index];
      cost += element.price * (element.maxSeats - element.seats);
    }
    return cost;
  }
  calculateUnitCost() {
    let cost = [];
    for (let index = 0; index < this.travels.length; index++) {
      const element = this.travels[index];
      cost.push(element.price * (element.maxSeats - element.seats));
    }
    return cost;
  }
  constructor(private userService: RoleService) {
    this.changeCart(this.travels, this.counter);
    this.userService.currentData.subscribe((data) => (this.user = data));
  }
  travels: any = [];
  counter = 0;

  public editDataDetails: {
    travels: any;
    counter: number;
    unitCost: number[];
    cost: number;
    near: number;
  } = {
    travels: this.travels,
    counter: this.counter,
    unitCost: this.calculateUnitCost(),
    cost: this.calculateCost(),
    near: this.nearTravels(),
  };
  public subject = new Subject<any>();

  private dataSource = new BehaviorSubject(this.editDataDetails);
  currentData = this.dataSource.asObservable();
  changeCart(data: any, data3: number) {
    this.travels = data;
    this.dataSource.next({
      travels: data,
      counter: data3,
      unitCost: this.calculateUnitCost(),
      cost: this.calculateCost(),
      near: this.nearTravels(),
    });
  }
}
