import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialList = () => {
  // первоначальный запрос с сервера
}

const dataLocal = initialList();



const initialState = {
  list: dataLocal,
  filterPrice: dataLocal,
  categories: dataLocal,
};

const productSlice = createSlice({
  name: 'films',
  initialState, 
  reducers: {
    sortList(state, action: PayloadAction<string>) {
      
    }
  }
});

export const { 
  sortList 
} = productSlice.actions;
export default productSlice.reducer;