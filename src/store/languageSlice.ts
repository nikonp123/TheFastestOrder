import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { languageType } from '../types/language.type';
import { defaultLanguage } from '../config/i18nConfig';

type languageState = {
  currentLanguage: languageType;
};

const initialState: languageState = {
  currentLanguage: defaultLanguage,
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeLanguageMy(state, action: PayloadAction<languageType>) {
      state.currentLanguage = action.payload;
    },
  },
});

export const { reducer: languageReducer, actions: languageActions } =
  languageSlice;
// export const languageReducer = languageSlice.reducer;
// export const { changeLanguageMy } = languageSlice.actions;
