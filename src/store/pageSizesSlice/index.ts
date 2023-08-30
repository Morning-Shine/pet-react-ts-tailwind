import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPageSizesSlice } from './type';
import { PAGE_ALBUMS_SIZES, PAGE_POST_SIZES } from 'constants/enums/pageSizes';

const initialState: IPageSizesSlice = {
  albums: PAGE_ALBUMS_SIZES[0],
  posts: PAGE_POST_SIZES[0]
};

export const pageSizes = createSlice({
  name: 'pageSizes',
  initialState,
  reducers: {
    changeAlbumsPageSize: (
      state,
      action: PayloadAction<(typeof PAGE_ALBUMS_SIZES)[number]>
    ) => {
      state.albums = action.payload;
    },
    changePostsPageSize: (
      state,
      action: PayloadAction<(typeof PAGE_POST_SIZES)[number]>
    ) => {
      state.posts = action.payload;
    },
  },
});

export const { changeAlbumsPageSize, changePostsPageSize } = pageSizes.actions;
export default pageSizes.reducer;
