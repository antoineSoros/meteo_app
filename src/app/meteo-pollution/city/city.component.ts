import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {City} from '../shared/models/city.model';
import {LocationIqService} from '../shared/services/location-iq.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Subscription} from 'rxjs';
import {LocationIQ} from '../shared/models/location-iq.models';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'mp-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {


@Input() city: City;
@Output() eventCity: EventEmitter<City>;

  constructor(private locationIQService: LocationIqService, private snackbar: MatSnackBar) {
    this.findLocation();
   this.eventCity = new EventEmitter();
   }

  ngOnInit() { }

  findLocation() {
    navigator.geolocation.getCurrentPosition(
      (event: Position) => {
        this.city.position = event ;
      this.findCityName();
      },
      () => {
        return this.snackbar.open('VILLE INTROUVABLE!!!', 'Retry'
        ).onAction().subscribe(() => this.findLocation());
      });

  }
  findCityName(): Subscription {
    return this.locationIQService.get(this.city.position).subscribe(
      (locationIq: LocationIQ) => {
        this.city.address = locationIq.address;
        this.eventCity.emit(this.city);
      },
      (error: HttpErrorResponse) => {this.snackbar.open('City Location Error', 'Retry'
      ).onAction().subscribe(() => this.findCityName()); }
    );


  }
}