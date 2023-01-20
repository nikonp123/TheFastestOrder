import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SettingsValueType } from '../types/settings.type';
import { defaultSetForCardVariants } from '../config/settingsConfig';

type settingsState = {
  name: string;
  value: SettingsValueType;
};

const initialState: settingsState[] = [
  {
    name: 'cardsVariant',
    value: defaultSetForCardVariants,
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

export const { reducer: settingsReducer, actions: settingsActions } =
  settingsSlice;

// export const settingsReducer = settingsSlice.reducer;
// export const { setSetting } = settingsSlice.actions;
