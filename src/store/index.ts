import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { authReducer } from './authSlice';
import { languageReducer } from './languageSlice';
import { cartReducer } from './cartSlice';
import { goodsApi } from './goodsApi';
import { userApi } from './userApi';
import { goodsFiltersReducer } from './goodsFiltersSlice';
import { goodsCategoryReducer } from './goodsCategorySlice';
import { errorsHandlerReducer } from './errorsHandlerSlice';
import { settingsReducer } from './settingsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    lang: languageReducer,
    settings: settingsReducer,
    cart: cartReducer,
    errors: errorsHandlerReducer,
    goodsFilters: goodsFiltersReducer,
    goodsCategory: goodsCategoryReducer,
    [goodsApi.reducerPath]: goodsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(goodsApi.middleware)
      .concat(userApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
