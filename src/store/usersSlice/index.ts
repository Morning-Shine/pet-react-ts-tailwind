import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUsersSlice } from './type';


const initialState: IUsersSlice = {
  view: 'cards',
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    changeView: (state, action) => {
      state.view = action.payload;
    },
  },
});

export const { changeView } = usersSlice.actions;
export default usersSlice.reducer;
