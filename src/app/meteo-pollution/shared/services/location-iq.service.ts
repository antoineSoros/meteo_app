import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { token } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LocationIqService {

  constructor(private http: HttpClient) { 

  }
      get(position: Position){
      return this.http.get(`https://eu1.locationiq.com/v1/reverse.php?key=${token.apiToken}&lat=${position.coords.latitude}&lon=${position.coords.longitude}&tag=POI&radius=IN_METERS&format=json`);
  }
}
