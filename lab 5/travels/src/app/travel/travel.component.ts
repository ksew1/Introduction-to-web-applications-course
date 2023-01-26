import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { Travel, travels } from '../travels';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css'],
})
export class TravelComponent {
  data: any;
  opinions: any;
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}
  routeSub!: Subscription;
  private id!: number;
  travel: any;
  maxSeats = 0;
  rating: any;
  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.dataService.currentData.subscribe((data) => (this.data = data));
    this.travel = this.data.travels[this.id];
    this.maxSeats = this.data.maxSeats[this.id];
    this.rating = this.data.ratings[this.id];
    this.opinions = [];
  }

  addOpinion(newOpinion: any) {
    console.warn(newOpinion);
    this.opinions.push(newOpinion);
    this.data.ratings[this.id].rating += newOpinion.rating;
    this.data.ratings[this.id].counter++;
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
  orderTravel(travel: Travel) {
    this.data.counter++;
    travel.seats--;
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
  resign(travel: Travel) {
    this.data.counter--;
    travel.seats++;
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
