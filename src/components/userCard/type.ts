import { TUser } from "types/user";


export type TUserForCard = Omit<
  TUser,
  'address' | 'phone' | 'website' | 'company'
> & {
  showDetail: (id: number) => void;
};
