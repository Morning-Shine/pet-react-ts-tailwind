import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPostsSlice } from './type';



const initialState: IPostsSlice = {
  page: 1,
  pagesTotal: 0,
};

export const postsSlice = createSlice({
  name: 'posts',
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

export const { changePage, setPagesTotal } = postsSlice.actions;
export default postsSlice.reducer;
