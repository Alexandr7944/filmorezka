import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LanguageState } from '../../types/lang';

const initialState: LanguageState = {
  language: 'en', // язык по умолчанию
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;