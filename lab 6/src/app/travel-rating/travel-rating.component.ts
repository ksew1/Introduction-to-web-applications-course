import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-travel-rating',
  templateUrl: './travel-rating.component.html',
  styleUrls: ['./travel-rating.component.css']
})
export class TravelRatingComponent {
  stars = ['&#9734;', '&#9734;', '&#9734;', '&#9734;', '&#9734;'];
  rating = 0

  @Output() ratingEvent = new EventEmitter<number>();
  changeRating(i : number) {
    this.rating = i + 1
    this.stars.fill('&#9733;', 0, i+1)
    this.stars.fill('&#9734;', i+1)
    this.ratingNotify()
  }
  ratingNotify() {
    this.ratingEvent.emit(this.rating);
  }
  clearStars() {
    this.stars = ['&#9734;', '&#9734;', '&#9734;', '&#9734;', '&#9734;'];

  }
}
