import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IGoodsFilters } from '../types/goods.type';

const initialState: IGoodsFilters[] = [
  // {
  //   name: ENamesGoodsFilters.category,
  //   filters: [
  //     { value: 'test category', apply: true },
  //     // { value: 'УТ-00000526', apply: true },
  //   ],
  // },
  // {
  //   name: ENamesGoodsFilters.onlyWithBalance,
  //   value: true,
  // },
];

const goodsFiltersSlice = createSlice({
  name: 'goodsFilters',
  initialState,
  reducers: {
    changeGoodsFilter(state, action: PayloadAction<IGoodsFilters>) {
      state.map((e) => {
        if (e.name !== action.payload.name) {
          return e;
        } else {
          e.value = action.payload.value;
          return e;
        }
      });
    },
    changeGoodsFilterInArray(state, action: PayloadAction<IGoodsFilters>) {
      const currentFilters = action.payload.filters;
      if (currentFilters) {
        const findNameFilter = state.find(
          (e) => e.name === action.payload.name
        );
        if (findNameFilter) {
          if (currentFilters[0].apply) {
            findNameFilter.filters?.push(currentFilters[0]);
          } else {
            const newfindNameFilter = findNameFilter.filters?.filter(
              (eFilter) => eFilter.value !== currentFilters[0].value
            );
            if (newfindNameFilter) {
              findNameFilter.filters = newfindNameFilter;
            }
          }
        } else {
          state.push(action.payload);
        }
      }
    },
  },
});

export const { changeGoodsFilter, changeGoodsFilterInArray } =
  goodsFiltersSlice.actions;
export const goodsFiltersReducer = goodsFiltersSlice.reducer;
