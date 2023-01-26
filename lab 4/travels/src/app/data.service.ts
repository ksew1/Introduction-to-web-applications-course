import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Travel} from './travels';


@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  public editDataDetails: any = [];
  public subject = new Subject<any>();

  private dataSource = new BehaviorSubject(this.editDataDetails);
  currentData = this.dataSource.asObservable();
  changeCart(data: Travel[], data2: any, data3: number) {
    this.dataSource.next({travels: data, maxSeats: data2, counter: data3});
  }
}
