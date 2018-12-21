import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {token} from 'src/environments/environment';
import {LocationIQ} from '../models/location-iq.models';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LocationIqService {

  constructor(private http: HttpClient) {

  }
      get(position: Position): Observable<LocationIQ> {
      return this.http.get<LocationIQ>(`https://eu1.locationiq.com/v1/reverse.php?key=${token.apiTokenLocationIq}
      &lat=${position.coords.latitude}&lon=${position.coords.longitude}&tag=POI&radius=IN_METERS&format=json`);
  }
}
