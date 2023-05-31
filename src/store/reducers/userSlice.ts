import { IUserAccount } from "@/interface/IUserAccount";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUserState extends IUserAccount {
  isAuth: boolean,
}

const initialState: IUserState = {
  isAuth: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState, 
  reducers: {
    setUser(state, action: PayloadAction<IUserAccount>) {
      state.isAuth = true;
      Object.assign(state, action.payload);
    },
    clearUser(state) {
      state.isAuth = false;
      state.displayName = undefined;
      state.email = undefined;
      state.roles = undefined;
      state.id = undefined;
    }
  }
});

export const { 
  setUser,
  clearUser
} = userSlice.actions;

export default userSlice.reducer;