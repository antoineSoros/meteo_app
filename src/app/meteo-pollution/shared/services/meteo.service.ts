import {Injectable, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {token} from '../../../../environments/environment';
import {City} from '../models/city.model';
import {Observable} from 'rxjs';
import {Meteo} from '../models/meteo.model';


@Injectable({
  providedIn: 'root'
})
export class MeteoService {
  @Input() city: City;
  constructor(private http: HttpClient) { }

  get(city: City): Observable< Meteo> {
   return this.http.get<Meteo>(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city.address.county}
   &APPID=${token.apiOpenWeatherMap}&lang=fr  `);

  }
}
