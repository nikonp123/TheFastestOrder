import { PayloadAction, createSlice, current } from '@reduxjs/toolkit';
import { ICartType } from '../types/goods.type';
import { checkCount } from '../utilites/handlingCart';

const initialState: ICartType[] = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    changeItemCart(state, action: PayloadAction<ICartType>) {
      const indexOfGood = state.findIndex(
        (e) => e.good.id === action.payload.good.id
      );
      // let prevCountInState = 0;
      // if (indexOfGood !== -1) {
      //   prevCountInState = state[indexOfGood].count;
      // }

      const error = checkCount(action.payload.count, action.payload.balance);
      if (indexOfGood === -1) {
        if (action.payload.count > 0) {
          state.push(action.payload);
        }
      } else {
        state[indexOfGood].count = action.payload.count;
        state[indexOfGood].error = error;
        // state[indexOfGood].count =
        // state[indexOfGood].count + action.payload.count;
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
