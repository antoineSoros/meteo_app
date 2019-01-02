import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';

import {MeteoPollutionComponent} from './meteo-pollution.component';
import {CitiesComponent} from './cities/cities.component';
import {CityComponent} from './city/city.component';
import {MeteoComponent} from './meteo/meteo.component';
import {PollutionComponent} from './pollution/pollution.component';

@NgModule({
  declarations: [
    MeteoPollutionComponent,
    CitiesComponent,
    CityComponent,
    MeteoComponent,
    PollutionComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    MeteoPollutionComponent,
  ]
})
export class MeteoPollutionModule { }
