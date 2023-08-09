import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './themeSlice';
import albumsSlice from './albumsSlice';
import { api } from 'services/api';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    theme: themeSlice,
    albums: albumsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
