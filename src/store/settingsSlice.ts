import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ECardVariants } from '../types/settings.type';

type settingsState = {
  name: string;
  value: string | number | boolean | undefined;
};

const initialState: settingsState[] = [
  {
    name: 'cardsVariant',
    value: ECardVariants.table,
  },
];

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSetting(state, action: PayloadAction<settingsState>) {
      const currentSetting = state.find((e) => e.name === action.payload.name);
      if (currentSetting) {
        currentSetting.value = action.payload.value;
      } else {
        // state.push(action.payload);
      }
    },
  },
});

export const settingsReducer = settingsSlice.reducer;
export const { setSetting } = settingsSlice.actions;
