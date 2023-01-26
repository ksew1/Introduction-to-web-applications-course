import { Component } from '@angular/core';
import { PersistenceService } from '../persistence.service';
import { collection, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css'],
})
export class AdminViewComponent {
  persistance: number = 0;
  users: any;
  constructor(
    private persistenceService: PersistenceService,
    private firestore: Firestore
  ) {
    this.persistenceService.currentData.subscribe(
      (data) => (this.persistance = data)
    );
    const dbInstance = collection(this.firestore, 'users');
    onSnapshot(dbInstance, (response) => {
      this.users = [
        ...response.docs.map((item) => {
          return { ...item.data(), id: item.id, form: null };
        }),
      ];

      this.users.forEach((element: any) => {
        element.form = this.creatForm(element);
      });
    });
  }
  creatForm(user: any) {
    return new FormGroup({
      client: new FormControl(user.roles.client),
      menager: new FormControl(user.roles.menager),
      admin: new FormControl(user.roles.admin),
    });
  }

  changeBan(user: any) {
    const dataToUpdate = doc(this.firestore, 'users', user.id);
    updateDoc(dataToUpdate, {
      roles: { ...user.roles, ban: !user.roles.ban },
    }).catch((err) => {
      alert(err.message);
    });
  }

  onChange(user: any) {
    const formValue = user.form.value;

    user.roles.client = formValue.client;

    user.roles.menager = formValue.menager;

    user.roles.admin = formValue.admin;

    const dataToUpdate = doc(this.firestore, 'users', user.id);
    updateDoc(dataToUpdate, {
      roles: user.roles,
    }).catch((err) => {
      alert(err.message);
    });
  }

  changePer(value: any) {
    this.persistenceService.updateData(value.persistence);
  }
}
