import {Component} from '@angular/core';
import {City} from './shared/models/city.model';
import {CitiesService} from "./shared/services/cities.service";


@Component({
  selector: 'mp-meteo-pollution',
  templateUrl: './meteo-pollution.component.html',
  styleUrls: ['./meteo-pollution.component.scss']
})
export class MeteoPollutionComponent  {
 public city: City;

  constructor(private citiesService: CitiesService) {
this.city = new City();

  }

addCity(city: City) {
this.citiesService.post(city);
}

}
