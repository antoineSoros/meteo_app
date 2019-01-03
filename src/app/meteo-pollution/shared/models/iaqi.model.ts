import {No2} from './no2.model';
import {Pm10} from './pm10.model';
import {W} from './w.model';
import {Dew} from './dew.model';

export class Iaqi {
  dew: Dew;
  no2: No2;
  pm10: Pm10;
  w: W;
}
