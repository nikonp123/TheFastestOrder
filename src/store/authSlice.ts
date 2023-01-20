import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { languageType } from '../types/language.type';
import { defaultLanguage } from '../config/i18nConfig';

type AccessRights = {
  name: string;
  allow: boolean;
};

export type authState = {
  isAuth: boolean;
  name: string;
  phone: string;
  language: languageType;
  accessRight?: AccessRights[];
};

const initialState: authState = {
  isAuth: false,
  name: '',
  phone: '',
  language: defaultLanguage,
  accessRight: [],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signInOut(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
    setUserProperties(state, action: PayloadAction<authState>) {
      state.isAuth = action.payload.isAuth;
      state.language = action.payload.language;
      state.name = action.payload.name;
      state.phone = action.payload.phone;
      // state.accessRight = []
    },
  },
});

export const authReducer = authSlice.reducer;
export const { signInOut, setUserProperties } = authSlice.actions;
// export const authReducer = authSlice.reducer;
// export const authActions = authSlice.actions;
