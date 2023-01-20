import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrlRestApi } from '../config/restApiConig';
import { IUserType } from '../types/user.type';
import { authState, authActions } from './authSlice';
import { returnLanguage } from '../config/i18nConfig';
import i18next from 'i18next';
import { languageActions } from './languageSlice';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrlRestApi }),
  endpoints: (builder) => ({
    getUser: builder.query<IUserType[], string>({
      query: () => ({ url: `/user` }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        // `onStart` side-effect
        // dispatch(messageCreated('Fetching posts...'));

        try {
          const { data } = await queryFulfilled;
          // `onSuccess` side-effect
          //   console.log(data);
          if (data?.length === 1) {
            const userProperties: authState = {
              isAuth: true,
              name: data[0].name,
              phone: data[0].phone,
              language: returnLanguage(data[0].options.language),
            };
            dispatch(authActions.setUserProperties(userProperties));
            dispatch(languageActions.changeLanguageMy(userProperties.language));
            i18next.changeLanguage(userProperties.language);
          }
          //   dispatch(signInOut(true));
        } catch (err) {
          // `onError` side-effect
          dispatch(authActions.signInOut(false));
        }
      },
    }),
  }),
});

export const { useGetUserQuery } = userApi;
