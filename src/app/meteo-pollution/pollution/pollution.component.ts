import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {City} from '../shared/models/city.model';
import {Subscription} from 'rxjs';
import {PollutionService} from '../shared/services/pollution.service';
import {MatSnackBar} from '@angular/material';
import {Pollution} from '../shared/models/pollution.model';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'mp-pollution',
  templateUrl: './pollution.component.html',
  styleUrls: ['./pollution.component.scss']
})
export class PollutionComponent implements OnInit, OnChanges {
  @Input() pollution: Pollution;
  @Output() eventCity: EventEmitter<City>;
  @Input() city: City;

  constructor(private pollutionService: PollutionService, private snackbar: MatSnackBar) {
    this.pollution = new Pollution();
    this.eventCity = new EventEmitter();
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.findPollution();
  }

  findPollution(): Subscription {
    return this.pollutionService.get(this.city).subscribe((pollutionModel: Pollution) => {
        this.city.pollution = pollutionModel;
        if (this.city.pollution.data.aqi < 51) {
          this.city.pollution.data.aqiDescription = 'BON';
          this.city.pollution.data.aqiColor = 'bon';
        }
        if (this.city.pollution.data.aqi > 50 && this.city.pollution.data.aqi < 101) {
          this.city.pollution.data.aqiDescription = 'MODÉRÉ';
          this.city.pollution.data.aqiColor = 'moyen';
        }
        if (this.city.pollution.data.aqi > 100 && this.city.pollution.data.aqi < 151) {
          this.city.pollution.data.aqiDescription = 'RISQUE POUR SANTÉ FRAGILE';
          this.city.pollution.data.aqiColor = 'sensible';
        }
        if (this.city.pollution.data.aqi > 150 && this.city.pollution.data.aqi < 201) {
          this.city.pollution.data.aqiDescription = 'RISQUE POUR LA SANTÉ ';
          this.city.pollution.data.aqiColor = 'dangeureux';
        }

        if (this.city.pollution.data.aqi > 200 && this.city.pollution.data.aqi < 301) {
          this.city.pollution.data.aqiDescription = ' DANGEREUX POUR LA SANTÉ ';
          this.city.pollution.data.aqiColor = 'tresdangeureux';

        }
        if (this.city.pollution.data.aqi > 300) {
          this.city.pollution.data.aqiDescription = 'TRÈS DANGEREUX POUR LA SANTÉ';
          this.city.pollution.data.aqiColor = 'hazardous';
        }
      },
      (error: HttpErrorResponse) => {
        this.snackbar.open(' can\'t load pollution', 'OOPS', {duration: 3000}
        );
      }
    )
      ;
  }
}
