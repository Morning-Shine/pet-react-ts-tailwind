import {TGeoCoors} from './geoCoors'

export type TAddress = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: TGeoCoors;
  };