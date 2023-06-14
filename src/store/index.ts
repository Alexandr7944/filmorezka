import { configureStore } from "@reduxjs/toolkit";
import listOfProductsReducer from './reducers/listOfProductsSlice';
import userReducer from './reducers/userSlice';
import genresReducer from './reducers/genresSlice';
import langReducer from "./reducers/langReducer";


const store = configureStore({
  reducer: {
    listOfProducts: listOfProductsReducer,
    user: userReducer,
    mediaFilters: genresReducer,
    language: langReducer

  }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
