import { TAddress } from './address';
import { TCompany } from './company';

export type TUser = {
  [k: string]: any;

  id: number;
  name: string;
  username: string;
  email: string;
  address?: TAddress;
  phone: string;
  website?: string;
  company?: TCompany;
};
