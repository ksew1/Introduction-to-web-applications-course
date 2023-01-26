import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

import { RoleService } from './role.service';

import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  data: any;
  title = 'travels';
  data2: any;
  constructor(
    private dataService: DataService,
    public firestore: Firestore,
    public auth: Auth,
    private roleService: RoleService
  ) {
    this.dataService.currentData.subscribe((data) => (this.data = data));
    this.roleService.currentData.subscribe((data) => (this.data2 = data.roles));
  }

  ngOnInit(): void {
    /*travels.forEach(element => {
      this.addData(element)

    });*/
  }
}
