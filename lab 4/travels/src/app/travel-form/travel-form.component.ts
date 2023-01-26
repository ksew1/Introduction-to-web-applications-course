import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-travel-form',
  templateUrl: './travel-form.component.html',
  styleUrls: ['./travel-form.component.css']
})
export class TravelFormComponent {
  @Input() displayForm : boolean= false;
  @Output() formEvent = new EventEmitter();
  @Output() closeEvent = new EventEmitter
  travelForm = new FormGroup({
    name: new FormControl('', [Validators.required ,Validators.pattern('^[a-zA-Z ]*$')]),
    country: new FormControl('', [Validators.required ,Validators.pattern('^[a-zA-Z ]*$')]),
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.min(0)]),
    seats: new FormControl('', [Validators.required, Validators.min(1)]),
    description: new FormControl('', [Validators.required]),
    imageLink: new FormControl('', [Validators.required])
  });


  onSubmit() {
    const formValue = this.travelForm.value
    formValue.imageLink =  "/assets/images/" + String(formValue.imageLink).split(/(\\|\/)/g).pop()
    this.formEvent.emit(formValue)
    this.travelForm.reset()
  }
}
