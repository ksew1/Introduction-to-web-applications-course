import { Component } from '@angular/core';
import { FireStoreService } from '../fire-store.service';
import { RoleService } from '../role.service';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent {

  travels: any
  user: any
  filterArray = [0,1,2]

  constructor(private userService: RoleService, private fireService: FireStoreService) {
    this.fireService.currentData.subscribe((data) => (this.travels = this.findStatus(data)));
    this.userService.currentData.subscribe((data) => (this.user = data))
  }
  status: number[] = []
  findStatus(elemnets: any) {
    this.status = []
    let currTime = new Date().getTime()
    for (let index = 0; index < elemnets.length; index++) {
      const element = elemnets[index];
      if ( new Date(element.endDate).getTime() >= currTime &&  currTime >= new Date(element.startDate).getTime()) {
        this.status.push(1)
      } else if (new Date(element.endDate).getTime() >= currTime) {
        this.status.push(2)
      } else {
        this.status.push(0)
      }
    }
    return elemnets
  }

  addFilterData(newData: number[]) {
    this.filterArray = newData
  }
}
