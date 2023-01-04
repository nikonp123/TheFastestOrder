import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrlRestApi } from '../config/restApiConig';
import { IGoodsType } from '../types/goods.type';
import { IOrderType } from '../types/order.type';
import { IUserType } from '../types/user.type';

export const goodsApi = createApi({
  reducerPath: 'goodsApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrlRestApi }),
  // ,paramsSerializer: (goodsCategory)=>()
  endpoints: (builder) => ({
    getUser: builder.query<IUserType, string>({
      query: () => ({ url: `/user` }),
    }),
    getGoods: builder.query<
      IGoodsType[],
      {
        limit?: number;
        onlyWithBalance?: boolean;
        goodsCategoryStr?: string;
      }
    >({
      query: ({
        limit = 0,
        onlyWithBalance = false,
        goodsCategoryStr = '',
      }) => ({
        url: `/goods`,
        params: { limit, onlyWithBalance, goodsCategoryStr },
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

export const { useGetGoodsQuery, usePostOrderMutation, useGetUserQuery } =
  goodsApi;
