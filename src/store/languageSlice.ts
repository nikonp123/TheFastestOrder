import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { languageType } from '../types/language.type';
import { defaultLang } from '../config/i18nConfig';

type languageState = {
  currentLanguage: languageType;
};

const initialState: languageState = {
  currentLanguage: defaultLang,
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

export const languageReducer = languageSlice.reducer;
export const languageActions = languageSlice.actions;
