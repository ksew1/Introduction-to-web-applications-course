import { Component } from '@angular/core';
import { getAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {
  auth = getAuth();
  constructor(private router: Router) {}

  logOut() {
    this.auth.signOut();
    this.router.navigate(['/home']);
  }
}
