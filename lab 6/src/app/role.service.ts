import { Injectable } from '@angular/core';
import { Auth, getAuth } from '@angular/fire/auth';
import {
  Firestore,
  doc,
  onSnapshot,
  updateDoc,
} from '@angular/fire/firestore';

import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})

export class RoleService {
  auth = getAuth()
   constructor(private firestore: Firestore) {
     this.auth.onAuthStateChanged((user) => {
      if (user !== null) {
        onSnapshot(doc(this.firestore, 'users', String(user.email) ), (doc) => {
          this.dataSource.next(doc.data())
        });
      } else {

        this.dataSource.next(this.editableData)
      }

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
  editableData ={email:'' , bought: {} ,roles: {admin: false, customer: false, menager: false}, ordered: {}}

  private dataSource = new BehaviorSubject<any>({email:'' , bought: {} ,roles: {admin: false, customer: false, menager: false}, ordered: {}} );
  currentData = this.dataSource.asObservable();
}
