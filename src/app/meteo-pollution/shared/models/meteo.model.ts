import {Main} from './main.model';
import {Wind} from './wind.model';
import {Detail} from './detail.model';


export class Meteo {
  main: Main ;
  wind: Wind;
  weather: Detail[];
}
