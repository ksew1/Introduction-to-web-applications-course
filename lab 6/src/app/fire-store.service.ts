import {  Injectable } from '@angular/core';
import {
  addDoc,
  Firestore,
  collection,
  doc,
  updateDoc, onSnapshot
} from '@angular/fire/firestore';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FireStoreService {
  nextId!: number;
  editableDataDetails: any = []

  fireData: any = [];
  user: any
  editData(travel: any) {
    for (let index = 0; index < travel.length; index++) {
      const element = travel[index];
      console.warn(element);


    }
    return travel

  }
  constructor(public firestore: Firestore) {

    const dbInstance = collection(this.firestore, 'travels');
    onSnapshot(dbInstance, (response) => {
      this.fireData = [
        ...response.docs.map((item) => {
          return { ...item.data(), id: item.id };
        }),
      ];
      this.dataSource.next(this.fireData)
    })

  }

  updateData(col: string, id: string, value: any) {
    const dataToUpdate = doc(this.firestore, col, id);
    updateDoc(dataToUpdate, value)

      .catch((err) => {
        alert(err.message);
      });
  }



  public subject = new Subject<any>();


  private dataSource = new BehaviorSubject([]);
  currentData = this.dataSource.asObservable();

  changeData(data: any) {
    this.fireData = data;
  }
  addData(value: any) {
    const dbInstance = collection(this.firestore, 'travels');
    addDoc(dbInstance, value)
      .then(() => {
        alert('Data send');
      })
      .catch((err) => {
        alert(err.message);
      });
  }

}
