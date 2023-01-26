import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-travel-form',
  templateUrl: './travel-form.component.html',
  styleUrls: ['./travel-form.component.css'],
})
export class TravelFormComponent {
  constructor(private dataService: DataService) {}
  data: any;

  travelForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z ]*$'),
    ]),
    country: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z ]*$'),
    ]),
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    price: new FormControl(0, [Validators.required, Validators.min(0)]),
    seats: new FormControl(0, [Validators.required, Validators.min(1)]),
    description: new FormControl('', [Validators.required]),
    imageLink: new FormControl('', [Validators.required]),
  });
  ngOnInit() {
    this.dataService.currentData.subscribe((data) => (this.data = data));
  }

  onSubmit() {
    const formValue = this.travelForm.value;
    formValue.imageLink =
      '/assets/images/' +
      String(formValue.imageLink)
        .split(/(\\|\/)/g)
        .pop();
    formValue.price = +formValue.price!;

    this.data.maxPrice = Math.max(formValue.price, this.data.maxPrice);
    this.data.minPrice = Math.min(formValue.price, this.data.minPrice);
    this.data.ratings.push({ rating: 0, counter: 0 });
    this.data.maxSeats.push(formValue.seats);
    this.data.travels.push(formValue);
    this.data.bought.push(0)
    this.data.date.push(" ")
    this.dataService.changeCart(
      this.data.travels,
      this.data.maxSeats,
      this.data.counter,
      this.data.maxPrice,
      this.data.minPrice,
      this.data.ratings, this.data.bought, this.data.date
    );

    this.travelForm.reset();
  }
}
