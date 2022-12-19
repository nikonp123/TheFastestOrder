import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrlRestApi } from '../config/restApiConig';
import { goodsType } from '../types/goods.type';

export const goodsApi = createApi({
  reducerPath: 'goodsApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrlRestApi }),
  endpoints: (builder) => ({
    getGoods: builder.query<goodsType[], number>({
      query: (limit: number = 0) => ({
        url: `/goods`,
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
});

export const { useGetGoodsQuery } = goodsApi;
