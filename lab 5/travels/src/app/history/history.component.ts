import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { travels } from '../travels';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent {
  data: any;
  filterArray = [0,1,2]

  constructor(private dataService: DataService) {}
  status: number[] = []
  ngOnInit(): void {
    let currTime = new Date().getTime()
    this.dataService.currentData.subscribe((data) => (this.data = data));
    for (let index = 0; index < this.data.travels.length; index++) {
      const element = this.data.travels[index];

      if ( new Date(element.endDate).getTime() >= currTime &&  currTime >= new Date(element.startDate).getTime()) {
        this.status.push(1)
      } else if (new Date(element.endDate).getTime() >= currTime) {
        this.status.push(2)

      } else {
        this.status.push(0)

      }
    }
  }
  addFilterData(newData: number[]) {
    this.filterArray = newData
  }
}
