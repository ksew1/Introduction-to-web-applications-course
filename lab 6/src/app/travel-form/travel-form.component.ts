import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { FireStoreService } from '../fire-store.service';

@Component({
  selector: 'app-travel-form',
  templateUrl: './travel-form.component.html',
  styleUrls: ['./travel-form.component.css'],
})
export class TravelFormComponent {
  constructor(private dataService: DataService, private fireService: FireStoreService) {}
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
    maxSeats: new FormControl(0),
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


    console.error(formValue);

    this.data.travels.push(formValue);

    this.fireService.addData({...formValue, maxSeats: formValue.seats, ratings: {rating: 0, counter: 0}, posts: []})
    this.dataService.changeCart(
      this.data.travels,
      this.data.counter,

    );

    this.travelForm.reset();
  }

}
