import {Injectable, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {token} from '../../../../environments/environment';
import {City} from '../models/city.model';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {
  @Input() city: City;
  constructor(private http: HttpClient) { }

  get(position: Position) {
   this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.city.address.county}&APPID=${token.apiOpenWeatherMap} `);

  }
}
