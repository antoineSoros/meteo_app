import {Injectable} from '@angular/core';
import {City} from '../models/city.model';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  public cities: City[];

  constructor() {
    this.cities = [];
  }

  get(): Observable<City[]> {
    return of(this.cities);

  }


}
