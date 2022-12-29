import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrlRestApi } from '../config/restApiConig';
import { goodsGroupType, goodsType } from '../types/goods.type';
import { orderType } from '../types/order.type';

export const goodsApi = createApi({
  reducerPath: 'goodsApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrlRestApi }),
  // ,paramsSerializer: (goodsCategory)=>()
  endpoints: (builder) => ({
    getGoods: builder.query<
      goodsType[],
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
    postOrder: builder.mutation<string, orderType>({
      query: (order) => ({
        url: 'Orders',
        method: 'POST',
        body: order,
      }),
    }),
  }),
});

export const { useGetGoodsQuery, usePostOrderMutation } = goodsApi;
