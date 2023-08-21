import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAlbumsSlice } from './type';


const initialState: IAlbumsSlice = {
  page: 1,
  pagesTotal: 0,
};

export const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload;
    },
    setPagesTotal: (state, action: PayloadAction<number>) => {
      state.pagesTotal = Math.ceil(action.payload);
    },
  },
});

export const { changePage, setPagesTotal } = albumsSlice.actions;
export default albumsSlice.reducer;
