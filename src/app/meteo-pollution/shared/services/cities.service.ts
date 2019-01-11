import {Injectable} from '@angular/core';
import {City} from '../models/city.model';
import {Observable, of} from 'rxjs';
import {LocationIqService} from './location-iq.service';
import {LocalStorage} from '@ngx-pwa/local-storage';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  public cities: City[];
  public reelCity: boolean;

  constructor(private locationIqService: LocationIqService, private localStorage: LocalStorage) {
    this.cities = [];

  }

  get(): Observable<City[]> {
    return of(this.cities);


  }

  post(city: City): Observable<City[]> {
    const foundCity = this.cities.find((current) => current.address.county === city.address.county);
    if (!foundCity) {

        this.cities.push(city);
        this.localStorage.setItemSubscribe('cities', city.address.county);
      }
      return this.get();
    }

  }

