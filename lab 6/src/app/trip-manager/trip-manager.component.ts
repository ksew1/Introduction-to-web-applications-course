import { Component, ViewChild } from '@angular/core';
import { FireStoreService } from '../fire-store.service';
import { deleteDoc, doc } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-trip-manager',
  templateUrl: './trip-manager.component.html',
  styleUrls: ['./trip-manager.component.css'],
})
export class TripManagerComponent {
  edit: any;
  travels: any;
  constructor(private fireService: FireStoreService, private firestore: Firestore) {
    this.fireService.currentData.subscribe((data) => (this.travels = data));
  }


  editT(travel: any) {
    this.edit = travel;
  }
  @ViewChild('name') name: any;
  @ViewChild('country') country: any;
  @ViewChild('startDate') startDate: any;
  @ViewChild('endDate') endDate: any;
  @ViewChild('desc') desc: any;

  @ViewChild('maxSeats') maxSeats: any;
  @ViewChild('price') price: any;
  changeTravel() {
    this.fireService.updateData('travels', this.edit.id, {
      ...this.edit,
      name: this.name.nativeElement.innerText,
      country: this.country.nativeElement.innerText,
      description: this.desc.nativeElement.innerText,
      startDate: this.startDate.nativeElement.innerText,
      endDate: this.endDate.nativeElement.innerText,
      seats: this.maxSeats.nativeElement.innerText,
      maxSeats: this.maxSeats.nativeElement.innerText,
      price: this.price.nativeElement.innerText,
    });
  }
  deleteTravel() {
    deleteDoc(doc(this.firestore, "travels", this.edit.id)).then(()=> {alert("usunięto")}).catch((err) => {alert(err.message)});
    this.edit = null
  }
}
