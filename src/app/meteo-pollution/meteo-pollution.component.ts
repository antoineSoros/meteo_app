import { Component, OnInit, Input } from '@angular/core';
import {City} from './shared/models/city.model';


@Component({
  selector: 'mp-meteo-pollution',
  templateUrl: './meteo-pollution.component.html',
  styleUrls: ['./meteo-pollution.component.scss']
})
export class MeteoPollutionComponent implements OnInit {
 public city: City;

  constructor() {
    this.city = new City();

  }

  ngOnInit() {
  }

  
  
}
