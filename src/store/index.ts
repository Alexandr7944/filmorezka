import { configureStore } from "@reduxjs/toolkit";
import listOfProductsReducer from './listOfProductsSlice';

const store = configureStore({
  reducer: {
    listOfProducts: listOfProductsReducer
  }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
