import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SettingComponent} from './setting/setting.component';
import {MeteoPollutionComponent} from './meteo-pollution/meteo-pollution.component';

const routes: Routes = [
  {path: 'meteo', component: MeteoPollutionComponent},
  {path: 'setting', component: SettingComponent},
  {path: '**', redirectTo: 'setting'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule {
}
