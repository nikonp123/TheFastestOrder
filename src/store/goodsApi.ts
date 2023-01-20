import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { baseUrlRestApi } from '../config/restApiConig';
import { IGoodsCategoryType, IGoodType } from '../types/goods.type';
import { IOrderType } from '../types/order.type';
import { EOrderGoodsVariants } from '../types/settings.type';

export const goodsApi = createApi({
  reducerPath: 'goodsApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrlRestApi }),
  keepUnusedDataFor: 600,
  // refetchOnFocus: false,
  // ,paramsSerializer: (goodsCategory)=>()
  endpoints: (builder) => ({
    getGoods: builder.query<
      IGoodType[],
      {
        limit?: number;
        onlyWithBalance?: boolean;
        goodsCategoryStr?: string;
        goodsName?: string;
        orderGoods?: string;
      }
    >({
      query: ({
        limit = 0,
        onlyWithBalance = true,
        goodsCategoryStr = '',
        goodsName = '',
        orderGoods = EOrderGoodsVariants.byName,
      }) => ({
        url: `/goods`,
        params: {
          limit,
          onlyWithBalance,
          goodsCategoryStr,
          goodsName,
          orderGoods,
        },
      }),
    }),
    getCategoryGoods: builder.query<
      IGoodsCategoryType[],
      {
        onlyCategoryGoods?: boolean;
      }
    >({
      query: ({ onlyCategoryGoods = true }) => ({
        url: `/goods`,
        params: { onlyCategoryGoods },
      }),
    }),
    postOrder: builder.mutation<string, IOrderType>({
      query: (order) => ({
        url: 'orders',
        method: 'POST',
        body: order,
      }),
    }),
  }),
});

export const {
  useGetGoodsQuery,
  useLazyGetGoodsQuery,
  useGetCategoryGoodsQuery,
  usePostOrderMutation,
} = goodsApi;
