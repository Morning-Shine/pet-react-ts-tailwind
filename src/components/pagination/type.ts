export type TOnePage = {
  page: number;
  isCurrentPage: boolean;
  changePage: (page: number) => void;
};

export type TPagination = {
  totalPages: number;
  changePage: (page: number) => void;
  currentPage: number;
};

export type TCollapsedPages = Omit<TPagination, 'totalPages'> & {
  pages: number[];
};
