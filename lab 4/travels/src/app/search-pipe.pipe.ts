import { Pipe, PipeTransform } from '@angular/core';
import { Travel } from './travels';

@Pipe({
  name: 'searchPipe',
})
export class SearchPipePipe implements PipeTransform {
  transform(
    travel: Travel[], filter: boolean,searchText: string,minPrice: number,maxPrice: number,startDate: string, endDate:string, startRating: number, endRating:number, ratings: {rating: number, counter:number}[], country: string): boolean[] {
    if (!filter) {
        return Array(travel.length).fill(true)
    }
    let textNull = false
    let minNull = false
    let maxNull = false
    let startNull = false
    let endNull = false
    let startRatingNull = false
    let endRatingNull = false
    let countryNull = false


    if (!searchText) {
       textNull = true
    }
    if (!minPrice) {
      minNull = true
    }
    if (!maxPrice) {
      maxNull = true
    }
    if (!startDate) {
      startNull = true
    }
    if (!endDate) {
      endNull = true
    }
    if(!startRating) {
      startRatingNull = true
    }
    if(!endRating) {
      endRatingNull = true
    }
    if(!country) {
      countryNull = true
    }

    return travel.map((x, index) => {
      return (
        (x.name.toLowerCase() === searchText.toLowerCase() || textNull)
        && (x.price <= maxPrice || maxNull )
        && (x.price >= minPrice || minNull)
        && ((new Date(x.startDate).getTime() >= new Date(startDate).getTime()) || startNull)
        && ((new Date(x.startDate).getTime() <= new Date(endDate).getTime()) || endNull)
        && ((ratings[index].rating / ratings[index].counter) <= endRating || endRatingNull )
        && ((ratings[index].rating / ratings[index].counter) >= startRating || startRatingNull)
        && (x.country.toLowerCase() === country.toLowerCase() || countryNull)
      );
    });
  }
}
