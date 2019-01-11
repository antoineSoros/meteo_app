import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {City} from '../shared/models/city.model';
import {Address} from '../shared/models/address.model';
import {CitiesService} from '../shared/services/cities.service';

@Component({
  selector: 'mp-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {
  @Input() city: City;
  @Output() eventCity: EventEmitter<City>;
  public cityForm: FormGroup;
  public cities: City[];

  constructor(private formBuilder: FormBuilder, private citiesService: CitiesService) {
    this.cityForm = this.createCityForm();
    this.citiesService.get().subscribe((cities: City[]) => this.cities = cities);
    this.eventCity = new EventEmitter();

  }

  createCityForm(): FormGroup {
    return this.formBuilder.group({
      cityName: ['', [
        Validators.minLength(2),
        Validators.maxLength(32)
      ]]
    });
  }

  ngOnInit() {
  }

  onSubmit(event: MSInputMethodContext) {
    const input = event.target;
    const cityName: AbstractControl = this.cityForm.get('cityName');

    if (cityName.valid && cityName.value) {
      const city: City = new City();
      city.address = new Address();
      city.address.county = cityName.value;
      this.citiesService.get().subscribe();
      this.citiesService.post(city);
      this.eventCity.emit(city);
      cityName.setValue('');
    }

  }

  removeFromList(city: City): void {
    const index = this.cities.indexOf(city);
    if (index >= 0) {
      this.cities.splice(index, 1);
    }
  }

  setCity(city: City): void {
    const index = this.cities.indexOf(city);
    if (index >= 0) {
      this.citiesService.get().subscribe();
      this.citiesService.post(city);
      this.eventCity.emit(city);
    }

  }
}
