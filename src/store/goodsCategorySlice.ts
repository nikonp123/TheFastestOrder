import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IGoodsCategoryType } from '../types/goods.type';

const initialState: IGoodsCategoryType[] = [
  // { id: '1111', title: 'test category' },
];

const goodsCategorySlice = createSlice({
  name: 'goodsCategory',
  initialState,
  reducers: {
    addAllGoodsCategory(state, action: PayloadAction<IGoodsCategoryType[]>) {
      state.length = 0;
      action.payload.forEach((e) => state.push(e));
    },
    changeGoodsCategoryChecked(
      state,
      action: PayloadAction<IGoodsCategoryType>
    ) {
      state[state.findIndex((e) => e.id === action.payload.id)].apply =
        action.payload.apply;
    },
  },
});

export const { reducer: goodsCategoryReducer, actions: goodsCategoryActions } =
  goodsCategorySlice;

// export const { addAllGoodsCategory, changeGoodsCategoryChecked } =
//   goodsCategorySlice.actions;
// export const goodsCategoryReducer = goodsCategorySlice.reducer;
