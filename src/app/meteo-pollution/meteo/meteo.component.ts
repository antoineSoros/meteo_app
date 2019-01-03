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

  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {

    this.findMeteo();

  }

  findMeteo(): Subscription {
    return this.meteoService.get(this.city).subscribe((meteoModel: Meteo) => {
        this.city.weather = meteoModel;

      },
      (error: HttpErrorResponse) => {
        this.snackbar.open(' can\'t load meteo', 'OOPS', {duration: 3000}
        );
      }
    );
  }


}

