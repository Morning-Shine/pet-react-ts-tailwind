import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAlbumsSlice } from './type';
import { PAGE_ALBUMS_SIZES } from 'constants/enums/pageSizes';

const initialState: IAlbumsSlice = {
  pageSize: PAGE_ALBUMS_SIZES[0],
  page: 1,
  pagesTotal: 0,
  // currentPage: 1
  
};

export const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {
    changePageSize: (
      state,
      action: PayloadAction<(typeof PAGE_ALBUMS_SIZES)[number]>
    ) => {
      state.pageSize = action.payload;
    },
    changePage: (state, action) => {
      state.page = action.payload;
    },
    setPagesTotal: (state, action) => {
      const albumsTotal = +action.payload;
      state.pagesTotal = Math.ceil(albumsTotal / +state.pageSize);
    },
  },
});

export const { changePageSize, changePage, setPagesTotal } =
  albumsSlice.actions;
export default albumsSlice.reducer;
