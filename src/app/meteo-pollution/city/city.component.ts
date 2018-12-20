import { Component, OnInit, Input } from '@angular/core';
import { City } from '../shared/models/city.model';
import { LocationIqService } from "../shared/services/location-iq.service";
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'mp-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {


@Input() city: City;
localizeMe : boolean = false;

  constructor(private locationIQService: LocationIqService, private snackbar: MatSnackBar) {
    this.findLocation();
   
   }

  ngOnInit() { }

  findLocation() {
   
    
    navigator.geolocation.getCurrentPosition(
      (event: Position) => this.findCityName(event), (event: PositionError) => this.snackbar.open("VILLE INTROUVABLE!!!","Retry")
    );    
  }
  findCityName(event: Position) {
    
   this.localizeMe=true;
   let geoloc = this.locationIQService.get(event).subscribe((response) => {
    this.city.nom=response['address']['county']},()=>this.snackbar.open("VILLE INTROUVABLE","RETRY"));
  }
   openSnackBar(message: string, action: string){
     this.snackbar.open(message,action,{duration:1000,}).onAction().subscribe(()=> this.findLocation())
   }
  }
