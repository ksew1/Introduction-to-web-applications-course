import { Component } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  updateProfile,
} from '@angular/fire/auth';
import { Router } from '@angular/router';

import {  Firestore, setDoc, doc } from '@angular/fire/firestore';




@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css'],
})
export class SingUpComponent {
  constructor(public auth: Auth, private router: Router, public firestore: Firestore) {
  }

  singUp(value: any): void {
    createUserWithEmailAndPassword(this.auth, value.email, value.password)
      .then((userData: any) => {
        updateProfile(userData.user, { displayName: value.name });

        setDoc(doc(this.firestore, 'users', value.email),   {roles: {client: true, menager: false, admin: false, ban: false}, email: value.email, bought: {}, ordered:{}}
          )
          .catch((err) => {
            alert(err.message);
          });
      })
      .catch((err) => {
        alert(err.message);
      });
    this.router.navigate(['/home']);
  }
}
