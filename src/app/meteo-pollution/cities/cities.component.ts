import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {City} from "../shared/models/city.model";
import {Address} from "../shared/models/address.model";

@Component({
  selector: 'mp-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {
  public cityForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.cityForm = this.createCityForm();
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

      cityName.setValue('');
    }

  }
}
