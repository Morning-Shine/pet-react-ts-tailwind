import { PAGE_ALBUMS_SIZES } from 'constants/enums/pageSizes';


export interface IPageSizesSlice {
  albums: (typeof PAGE_ALBUMS_SIZES)[number];
}
