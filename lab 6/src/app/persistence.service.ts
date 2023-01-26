import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  doc,
  onSnapshot,
  updateDoc,
} from '@angular/fire/firestore';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersistenceService {
  fireData: any;
  constructor(public firestore: Firestore) {
    const dbInstance = collection(this.firestore, 'persistance');
    onSnapshot(dbInstance, (response) => {
      this.fireData = [
        ...response.docs.map((item) => {
          return { ...item.data(), id: item.id };
        }),
      ];
      this.dataSource.next(this.fireData[0].value);
    });
  }

  public subject = new Subject<any>();

  private dataSource = new BehaviorSubject(-1);
  currentData = this.dataSource.asObservable();

  updateData(value: number) {
    const dataToUpdate = doc(this.firestore, 'persistance', 'persistance');
    updateDoc(dataToUpdate, {
      value: value,
    })
      .then(() => {
        console.log('Data updated');
      })
      .catch((err) => {
        alert(err.message);
      });
  }
}
