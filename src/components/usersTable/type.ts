import { TUser } from 'types/user';

export type TUserForTable = {
  data: TUser[];
  showDetail: (id: number) => void;
};
