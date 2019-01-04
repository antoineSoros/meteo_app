import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {City} from '../shared/models/city.model';
import {MeteoService} from '../shared/services/meteo.service';

import {Meteo} from '../shared/models/meteo.model';
import {Subscription} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'mp-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss']
})
export class MeteoComponent implements OnInit, OnChanges {
  @Input() city: City;
  @Input() meteo: Meteo;
  @Output() eventCity: EventEmitter<City>;

  constructor(private meteoService: MeteoService, private snackbar: MatSnackBar) {
    this.eventCity = new EventEmitter();
  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.city && this.city.address && !this.city.weather) {
      this.findMeteo();
    }
  }

  findMeteo(): Subscription {
    return this.meteoService.get(this.city).subscribe((meteoModel: Meteo) => {
        this.city.weather = meteoModel;
        if (this.city.weather.weather[0].id === 800) {
          this.city.weather.class = 'sun';
        }
        if (this.city.weather.weather[0].id >= 600 && this.city.weather.weather[0].id <= 699) {
          this.city.weather.class = 'snow';
        }
        if (this.city.weather.weather[0].id >= 500 && this.city.weather.weather[0].id <= 599) {
          this.city.weather.class = 'rain';
        }
        if (this.city.weather.weather[0].id >= 200 && this.city.weather.weather[0].id <= 299) {
          this.city.weather.class = 'thunder';
        }
        if (this.city.weather.weather[0].id >= 700 && this.city.weather.weather[0].id <= 799) {
          this.city.weather.class = 'fog';
        }
        if (this.city.weather.weather[0].id >= 801 && this.city.weather.weather[0].id <= 804) {
          this.city.weather.class = 'cloud';
        }
      },
      (error: HttpErrorResponse) => {
        this.snackbar.open(' can\'t load meteo', 'OOPS', {duration: 3000}
        );
      }
    );
  }


}

