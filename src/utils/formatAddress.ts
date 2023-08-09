import { TAddress } from 'types/address';


export const formatAddressObjToSrg = (address: TAddress) => {
  return `${address.zipcode}, ${address.city}, ул. ${address.street}-${address.suite}`;
};
