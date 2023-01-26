import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  show = true
  constructor(private dataService: DataService) {}

  cartData: any;
  ngOnInit() {
    this.dataService.currentData.subscribe(
      (data) => (this.cartData = data)
    );


  }
  showContent() {
    this.show = !this.show
  }
}
