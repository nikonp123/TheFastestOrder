import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import { goodsApi } from './goodsApi';
import languageSlice from './languageSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    lang: languageSlice,
    [goodsApi.reducerPath]: goodsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(goodsApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
