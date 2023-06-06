import { genre } from "@/types/genre";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IGenresState {
  genres: genre[],
}

const initialState: IGenresState = {
  genres: [],
};

const genresSlice = createSlice({
  name: 'genres',
  initialState, 
  reducers: {
    setGenres(state, action: PayloadAction<genre[]>) {
      state.genres = action.payload;
    }
  }
});

export const { 
  setGenres,
} = genresSlice.actions;

export default genresSlice.reducer;