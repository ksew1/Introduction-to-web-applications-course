import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Output() filterEvent = new EventEmitter();
  @Input() minPrice: any
  @Input() maxPrice: any
  filterForm = new FormGroup({
    name: new FormControl(''),
    country: new FormControl(''),
    priceMin: new FormControl(''),
    priceMax: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    ratingMin: new FormControl(''),
    ratingMax: new FormControl('')
  });




  onSubmit() {
    const formValue = this.filterForm.value
    this.filterEvent.emit(formValue)
  }

}
