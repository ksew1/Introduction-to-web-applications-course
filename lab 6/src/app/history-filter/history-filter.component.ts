import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-history-filter',
  templateUrl: './history-filter.component.html',
  styleUrls: ['./history-filter.component.css']
})
export class HistoryFilterComponent {
  @Output() filterEvent = new EventEmitter();
  filterForm = new FormGroup({
    status0: new FormControl(true),
    status1: new FormControl(true),
    status2: new FormControl(true),
  });


  onChange() {
    let statusArray = []
    const formValue = this.filterForm.value
    if (formValue.status0 == true) statusArray.push(0)
    if (formValue.status1 == true) statusArray.push(1)
    if (formValue.status2 == true) statusArray.push(2)
    this.filterEvent.emit(statusArray)
  }

}
