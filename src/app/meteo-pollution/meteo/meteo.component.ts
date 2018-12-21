import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {City} from '../shared/models/city.model';

@Component({
  selector: 'mp-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss']
})
export class MeteoComponent implements OnInit, OnChanges {
  @Input() city: City;
  constructor() {

  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
