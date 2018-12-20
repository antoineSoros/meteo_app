import { Component, OnInit, Input } from '@angular/core';
import { City } from '../shared/models/city.model';

@Component({
  selector: 'mp-pollution',
  templateUrl: './pollution.component.html',
  styleUrls: ['./pollution.component.scss']
})
export class PollutionComponent implements OnInit {
  @Input() city: City;
  constructor() { }

  ngOnInit() {
  }

}
