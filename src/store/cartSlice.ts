import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICartType } from '../types/goods.type';

const initialState: ICartType[] = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    changeItemCart(state, action: PayloadAction<ICartType>) {
      const indexOfGood = state.findIndex(
        (e) => e.good.id === action.payload.good.id
      );
      if (indexOfGood === -1) {
        state.push(action.payload);
      } else {
        state[indexOfGood].count =
          state[indexOfGood].count + action.payload.count;
        if (state[indexOfGood].count <= 0) {
          state.splice(indexOfGood, 1);
        }
      }
    },
    removeItemCart(state, action: PayloadAction<{ id: string }>) {
      return state.filter((p) => p.good.id !== action.payload.id);
    },
  },
});

export const { changeItemCart, removeItemCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
