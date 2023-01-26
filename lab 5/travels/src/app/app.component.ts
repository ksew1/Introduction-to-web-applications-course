import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data :any
  title = 'travels';
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.currentData.subscribe((data) => (this.data = data));
  }
}
