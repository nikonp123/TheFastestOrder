import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICartType } from '../types/goods.type';

const initialState: ICartType[] = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<ICartType>) {
      state.push(action.payload);
    },
    removeItem(state, action: PayloadAction<{ id: string }>) {
      return state.filter((p) => p.good.id !== action.payload.id);
    },
  },
});

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
