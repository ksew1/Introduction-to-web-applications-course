import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { TravelRatingComponent } from '../travel-rating/travel-rating.component';

@Component({
  selector: 'app-rating-form',
  templateUrl: './rating-form.component.html',
  styleUrls: ['./rating-form.component.css'],
})
export class RatingFormComponent {
  errors: string[] = [];
  rating = 0;
  @Output() opinionEvent = new EventEmitter();
  @ViewChild(TravelRatingComponent) child:TravelRatingComponent | undefined;

  opinionForm = new FormGroup({
    nick: new FormControl(''),
    name: new FormControl(''),
    opinion: new FormControl(''),
    date: new FormControl(''),
    rating: new FormControl(0),
  });
  onSubmit() {
    const formValue = this.opinionForm.value;
    this.child?.clearStars()
    this.errors = [];

    if (!formValue.nick) this.errors.push('Nick nie moze być pusty!');
    if (!formValue.name) this.errors.push('Nazwa nie moze być pusta!');
    if (!formValue.opinion) this.errors.push('Opinia nie moze być pusta!');
    if (formValue.opinion)
      if (formValue.opinion.length < 50 || formValue.opinion.length > 500)
        this.errors.push('Opinia powina być pomiędzy 50 a 500 słów!');
    if (this.rating == 0) this.errors.push("Musisz dać ocenę wyciecieczce!")
    if (this.errors.length == 0) {
      formValue.rating = this.rating;
      this.opinionEvent.emit(formValue);
      this.opinionForm.reset();
    }
  }
  addRatingData(newRating: number) {
    this.rating = newRating;
  }
}
