
export type TFilterByUser = {
  filteredUserId: number | '';
  changeUserHandler: (id: number | '') => void;
};
