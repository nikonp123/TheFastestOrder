import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { authReducer } from './authSlice';
import { goodsApi } from './goodsApi';
import { languageReducer } from './languageSlice';
import { cartReducer } from './cartSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    lang: languageReducer,
    cart: cartReducer,
    [goodsApi.reducerPath]: goodsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(goodsApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
