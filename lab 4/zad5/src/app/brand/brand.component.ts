import { literalMap } from '@angular/compiler';
import { Component } from '@angular/core';
import cars from '../json/cars.json';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent {
  chosenBrand = '';
  chosenModel = '';
  chosenColor = '';
  showModel: boolean[] = [];
  brandSet = new Set<string>();
  cars = cars;

  showColor = new Map();

  constructor() {
    for (let index = 0; index < this.cars.length; index++) {
      this.brandSet.add(this.cars[index].brand);
      this.showColor.set(this.cars[index].model, false);
    }
    for (let index = 0; index < this.brandSet.size; index++)
      this.showModel.push(false);
  }
  chosen(brand: string, model: string, color: string, event: any) {
    this.chosenBrand = brand;
    this.chosenModel = model;
    this.chosenColor = color;
    event.stopPropagation();
  }

  displayModel(i: number, event: any) {
    this.showModel[i] = !this.showModel[i];
    event.stopPropagation();
  }
  displayColor(model: string, event: any) {
    this.showColor.set(model, !this.showColor.get(model));
    event.stopPropagation();
  }
}
