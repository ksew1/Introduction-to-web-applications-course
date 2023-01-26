import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { FireStoreService } from '../fire-store.service';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(
    private dataService: DataService,
    private fireService: FireStoreService,
    private userService: RoleService
  ) {}
  cost: number[] = [];

  data: any;
  user: any;
  travels: any;
  calculateCost(travels: any) {
    for (let index = 0; index < travels.length; index++) {
      const element = travels[index];

      this.cost[index] = element.price * (element.maxSeats - element.seats);
    }
    return travels;
  }

  ngOnInit() {
    this.dataService.currentData.subscribe((data) => (this.data = data));
    this.userService.currentData.subscribe((data) => (this.user = data));
    this.fireService.currentData.subscribe(
      (data) => (this.travels = this.calculateCost(data))
    );
  }
  buy(travel: any) {
    let diff = 0;
    let i = travel.id;
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    let date = yyyy + '-' + mm + '-' + dd;
    if (travel.id in this.user.bought) {
      diff = this.user.bought[i].quantity + (travel.maxSeats - travel.seats);
    } else {
      diff = travel.maxSeats - travel.seats;
    }
    this.data.counter -= travel.maxSeats - travel.seats;
    travel.maxSeats = travel.seats;

    this.fireService.updateData('travels', travel.id, travel);
    this.userService.updateData('users', this.user.email, {
      ordered: { ...this.user.ordered, [travel.id]: { quantity: 0 } },
      bought: {
        ...this.user.bought,
        [travel.id]: { quantity: diff, date: date, rated: false },
      },
    });

    this.calculateCost(this.travels);
    this.dataService.changeCart(this.data.travels, this.data.counter);
  }
}
