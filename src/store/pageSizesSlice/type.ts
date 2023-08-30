import { PAGE_ALBUMS_SIZES, PAGE_POST_SIZES } from 'constants/enums/pageSizes';

export interface IPageSizesSlice {
  albums: (typeof PAGE_ALBUMS_SIZES)[number];
  posts: (typeof PAGE_POST_SIZES)[number];
}
