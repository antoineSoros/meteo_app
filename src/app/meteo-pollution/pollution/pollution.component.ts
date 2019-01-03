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
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.findPollution();
  }

  findPollution(): Subscription {
    return this.pollutionService.get(this.city).subscribe((pollutionModel: Pollution) => {
      this.city.pollution = pollutionModel;
    },
      (error: HttpErrorResponse) => {
        this.snackbar.open(' can\'t load pollution', 'OOPS', {duration: 3000}
        );
      }
  )
    ;
  }
}
