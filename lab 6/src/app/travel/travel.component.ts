import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { FireStoreService } from '../fire-store.service';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css'],
})
export class TravelComponent {
  data: any;
  travel: any = [];
  user: any;
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private fireService: FireStoreService,
    private userService: RoleService
  ) {}

  routeSub!: Subscription;
  public id!: string;

  maxSeats = 0;
  rating: any;
  findTravel(elements: any) {
    for (let index = 0; index < elements.length; index++) {
      const element = elements[index];
      if (element.id == this.id) {
        return element;
      }
    }
  }
  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.dataService.currentData.subscribe((data) => (this.data = data));
    this.userService.currentData.subscribe((data) => (this.user = data));
    this.fireService.currentData.subscribe(
      (data) => (this.travel = this.findTravel(data))
    );
    this.rating = this.travel.ratings;
  }

  addOpinion(newOpinion: any) {
    this.travel.posts.push(newOpinion);

    this.travel.ratings.rating += newOpinion.rating;
    if (newOpinion.rating > 0) {
      this.travel.ratings.counter++;
      
    }
    this.fireService.updateData('travels', this.id, this.travel);
    this.dataService.changeCart(this.data.travels, this.data.counter);
  }
  orderTravel(travel: any) {
    this.data.counter++;
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
    this.dataService.changeCart(this.data.travels, this.data.counter);
  }
  resign(travel: any) {
    this.data.counter--;
    travel.seats++;
    let diff;
    if (travel.id in this.user.ordered) {
      diff = this.user.ordered[travel.id].quantity - 1;
    }
    this.userService.updateData('users', this.user.email, {
      ordered: { ...this.user.ordered, [travel.id]: { quantity: diff } },
    });
    this.dataService.changeCart(this.data.travels, this.data.counter);
  }
}
