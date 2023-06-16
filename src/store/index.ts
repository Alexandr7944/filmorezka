import { configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers/userSlice';
import genresReducer from './reducers/genresSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    genres: genresReducer
  }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
