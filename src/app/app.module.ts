import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MeteoPollutionModule} from './meteo-pollution/meteo-pollution.module';
import {SettingComponent} from './setting/setting.component';


@NgModule({
  declarations: [
    AppComponent,
    SettingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MeteoPollutionModule,
    AppRoutingModule,

  ],
  exports: [
    SettingComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
