import { PAGE_ALBUMS_SIZES } from 'constants/enums/pageSizes';

export interface IAlbumsSlice {
  pageSize: (typeof PAGE_ALBUMS_SIZES)[number];
  page: number;
  pagesTotal: number;
}
