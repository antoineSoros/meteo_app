import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {City} from '../shared/models/city.model';
import {MeteoService} from '../shared/services/meteo.service';


@Component({
  selector: 'mp-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss']
})
export class MeteoComponent implements OnInit, OnChanges {
  @Input() city: City;

  constructor(private meteo: MeteoService) {

  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {



  }

}
