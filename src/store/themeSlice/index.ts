import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IThemeSlice } from './type';
import { MODE_LIGHT } from 'constants/theme/theme';
import { TMode } from 'constants/theme/type.theme.constant';

const initialState: IThemeSlice = {
  mode: MODE_LIGHT,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeMode: (state, action: PayloadAction<TMode>) => {
      state.mode = action.payload;
    },
  },
});

export const { changeMode } = themeSlice.actions;
export default themeSlice.reducer;
