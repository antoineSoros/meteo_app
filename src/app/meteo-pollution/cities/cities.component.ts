import {Component, OnInit} from '@angular/core';
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
  public cityForm: FormGroup;
  public cities: City[];

  constructor(private formBuilder: FormBuilder, private citiesService: CitiesService) {
    this.cityForm = this.createCityForm();
    this.citiesService.get().subscribe((cities: City[]) => this.cities = cities );

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
    if (cityName.valid) {
      const city: City = new City();
      city.address = new Address();
      city.address.county = cityName.value;
      this.citiesService.get().subscribe();
      cityName.setValue('');
    }

  }

}
