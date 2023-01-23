import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IErrorType } from '../types/error.type';

const initialState: IErrorType = {
  text: '',
};

const errorsHandlerSlice = createSlice({
  name: 'errors',
  initialState,
  reducers: {
    setError(state, action: PayloadAction<string>) {
      state.text = action.payload;
    },
  },
});

export const { reducer: errorsHandlerReducer, actions: errorsHandlerActions } =
  errorsHandlerSlice;
// export const { setError } = errorsHandlerSlice.actions;
// export const errorsHandlerReducer = errorsHandlerSlice.reducer;
