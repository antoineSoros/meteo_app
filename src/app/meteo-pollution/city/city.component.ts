import {Component, Input, OnInit} from '@angular/core';
import {City} from '../shared/models/city.model';
import {LocationIqService} from '../shared/services/location-iq.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'mp-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {


@Input() city: City;
localizeMe = false;

  constructor(private locationIQService: LocationIqService, private snackbar: MatSnackBar) {
    this.findLocation();


   }

  ngOnInit() { }

  findLocation() {
    navigator.geolocation.getCurrentPosition(
      (event: Position) => {
        this.city.position = event ;
      this.findCityName(event);
      },
      () => {
        return this.snackbar.open('VILLE INTROUVABLE!!!', 'Retry'
        ).onAction().subscribe(() => this.findLocation);
      });

  }
  findCityName(event: Position) {
    this.localizeMe = true;
    this.locationIQService.get(event).subscribe((reponse) => {
      this.city.nom = reponse['address']['city']; }, );

  }
}
