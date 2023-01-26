import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TravelRatingComponent } from '../travel-rating/travel-rating.component';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-rating-form',
  templateUrl: './rating-form.component.html',
  styleUrls: ['./rating-form.component.css'],
})
export class RatingFormComponent {
  errors: string[] = [];
  rating = 0;
  user: any;
  @Output() opinionEvent = new EventEmitter();
  @Input() id = '';

  @ViewChild(TravelRatingComponent) child: TravelRatingComponent | undefined;
  constructor(private userService: RoleService) {
    this.userService.currentData.subscribe((data) => (this.user = data.roles));
  }
  opinionForm = new FormGroup({
    nick: new FormControl(''),
    name: new FormControl(''),
    opinion: new FormControl(''),
    date: new FormControl(''),
    rating: new FormControl(0),
  });
  onSubmit() {
    const formValue = this.opinionForm.value;
    this.child?.clearStars();
    this.errors = [];

    if (!formValue.nick) this.errors.push('Nick nie moze być pusty!');
    if (!formValue.name) this.errors.push('Nazwa nie moze być pusta!');
    if (!formValue.opinion) this.errors.push('Opinia nie moze być pusta!');
    if (formValue.opinion)
      if (formValue.opinion.length < 50 || formValue.opinion.length > 500)
        this.errors.push('Opinia powina być pomiędzy 50 a 500 słów!');
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
