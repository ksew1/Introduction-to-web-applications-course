import { Component } from '@angular/core';
import {
  Auth,
  browserLocalPersistence,
  browserSessionPersistence,
  inMemoryPersistence,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { setPersistence } from '@firebase/auth';
import { PersistenceService } from '../persistence.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css'],
})
export class SingInComponent {
  persistence = 0;
  constructor(
    public auth: Auth,
    private router: Router,
    private persistenceService: PersistenceService
  ) {
    this.persistenceService.currentData.subscribe(
      (data) => (this.persistence = data)
    );
  }

  singIn(value: any): void {
    let type = browserLocalPersistence;
    if (this.persistence == 1) {
      type = browserSessionPersistence;
    } else if (this.persistence == 2) {
      type = inMemoryPersistence;
    }
    setPersistence(this.auth, type).then(async () => {
      return signInWithEmailAndPassword(
        this.auth,
        value.email,
        value.password
      ).catch((err) => {
        alert(err.message);
      });
    });
    this.router.navigate(['/home']);
  }
}
