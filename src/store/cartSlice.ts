import { PayloadAction, createSlice, current } from '@reduxjs/toolkit';
import { ICartType } from '../types/goods.type';
import {
  calculatePriceAndAmountCartWithoutDiscount,
  checkCount,
} from '../utilites/handlingCart';
import { cartItemsLocalSrorage } from '../config/localStorage';

const savedCart = localStorage.getItem(cartItemsLocalSrorage);
const initialState: ICartType[] =
  savedCart !== null ? JSON.parse(savedCart) : [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    changeItemCart(state, action: PayloadAction<ICartType>) {
      // console.log(action);
      const indexOfGood = state.findIndex(
        (e) => e.good.id === action.payload.good.id
      );
      // let prevCountInState = 0;
      // if (indexOfGood !== -1) {
      //   prevCountInState = state[indexOfGood].count;
      // }

      const error = checkCount(
        action.payload.count,
        action.payload.good?.balance ?? 0
      );
      if (indexOfGood === -1) {
        if (action.payload.count > 0) {
          const i = state.push(action.payload);
          state[i - 1].error = error;
          state[i - 1] = calculatePriceAndAmountCartWithoutDiscount(
            state[i - 1]
          );
        }
      } else {
        state[indexOfGood].count = action.payload.count;
        state[indexOfGood].error = error;
        state[indexOfGood] = calculatePriceAndAmountCartWithoutDiscount(
          state[indexOfGood]
        );
        // state[indexOfGood].count =
        // state[indexOfGood].count + action.payload.count;
        if (state[indexOfGood].count <= 0) {
          state.splice(indexOfGood, 1);
        }
      }
      localStorage.setItem(cartItemsLocalSrorage, JSON.stringify(state));
    },
    removeItemCart(state, action: PayloadAction<{ id: string }>) {
      localStorage.removeItem(cartItemsLocalSrorage);
      localStorage.setItem(cartItemsLocalSrorage, JSON.stringify(state));
      return state.filter((p) => p.good.id !== action.payload.id);
    },
    clearCart(state) {
      localStorage.removeItem(cartItemsLocalSrorage);
      return (state = []);
    },
  },
});

export const { changeItemCart, removeItemCart, clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
