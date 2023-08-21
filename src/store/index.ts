import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './themeSlice';
import albumsSlice from './albumsSlice';
import pageSizesSlice from './pageSizesSlice';
import { api } from 'services/api';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  theme: themeSlice,
  albums: albumsSlice,
  pageSizes: pageSizesSlice,
});

const persistConfig = {
  key: 'pet-react-ts-tailwind',
  version: 1,
  storage,
  whitelist: ['theme', 'pageSizes'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware)
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
