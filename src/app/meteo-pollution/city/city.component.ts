import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {City} from '../shared/models/city.model';
import {LocationIqService} from '../shared/services/location-iq.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Subscription} from 'rxjs';
import {LocationIQ} from '../shared/models/location-iq.models';
import {HttpErrorResponse} from '@angular/common/http';
import {CitiesService} from '../shared/services/cities.service';
import {Address} from '../shared/models/address.model';

@Component({
  selector: 'mp-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {


@Input() city: City;
@Output() eventCity: EventEmitter<City>;

  constructor(private locationIQService: LocationIqService, private snackbar: MatSnackBar, citiesService: CitiesService) {
    this.findLocation();
   this.eventCity = new EventEmitter();
   }

  ngOnInit() { }

  findLocation(): void {
    return navigator.geolocation.getCurrentPosition(
      (event: Position) => this.findCityName(event),
      (event: PositionError) => this.snackbar.open('Geolocation Failed', 'Retry'
      ).onAction().subscribe(() => this.findLocation()));



  }
  findCityName(position: Position): Subscription {
    return this.locationIQService.get(position).subscribe(
      (locationIq: LocationIQ) => {
       const city = new City;
       city.position = position;
       city.address = new Address;
       city.address = locationIq.address;
        this.eventCity.emit(city);
      },
      (error: HttpErrorResponse) => {this.snackbar.open('City Location Error', 'Retry'
      ).onAction().subscribe(() => this.findCityName(position)); }
    );


  }
}
