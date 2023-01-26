import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'searchPipe',
})
export class SearchPipePipe implements PipeTransform {
  transform(
    travel: any, filter: boolean,searchText: string,minPrice: number,maxPrice: number,startDate: string, endDate:string, startRating: number, endRating:number,  country: string): boolean[] {
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

    if (!minPrice || minPrice==Infinity) {
      minNull = true

    }
    if (!maxPrice || maxPrice == -1) {
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



    return travel.map((x: any) => {
      return (
        (x.name.toLowerCase() === searchText.toLowerCase() || textNull)
        && (x.price <= maxPrice || maxNull )
        && (x.price >= minPrice || minNull)
        && ((new Date(x.startDate).getTime() >= new Date(startDate).getTime()) || startNull)
        && ((new Date(x.startDate).getTime() <= new Date(endDate).getTime()) || endNull)
        && ((x.ratings.rating / x.ratings.counter) <= endRating || endRatingNull )
        && ((x.ratings.rating / x.ratings.counter) >= startRating || startRatingNull)
        && (x.country.toLowerCase() === country.toLowerCase() || countryNull)
      );
    });
  }
}
