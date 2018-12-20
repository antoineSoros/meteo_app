import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MeteoPollutionModule } from './meteo-pollution/meteo-pollution.module';


@NgModule({
  declarations: [
    AppComponent,
       ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MeteoPollutionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
