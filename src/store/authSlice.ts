import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AccessRights = {
  name: string;
  allow: boolean;
};

type authState = {
  isAuth: boolean;
  accessRight: AccessRights[];
};

const initialState: authState = {
  isAuth: false,
  accessRight: [],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn(state, action: PayloadAction<boolean>) {
      state.isAuth = true;
    },
    signOut(state, action: PayloadAction<boolean>) {
      state.isAuth = false;
    },
  },
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
