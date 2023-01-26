import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @Output() formEvent = new EventEmitter();
  postForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    const formValue = this.postForm.value;
    this.formEvent.emit(formValue);
    this.postForm.reset();
  }
}
