import {Injectable, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {City} from '../models/city.model';
import {Observable} from 'rxjs';
import {Pollution} from '../models/pollution.model';
import {token} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PollutionService {
  @Input() city: City;
  constructor(private http: HttpClient) { }
  get(city: City): Observable< Pollution> {
    return this.http.get<Pollution>(`http://api.waqi.info/feed/${city.address.county}/?token=${token.apiPollution}
    `);
  }
}

