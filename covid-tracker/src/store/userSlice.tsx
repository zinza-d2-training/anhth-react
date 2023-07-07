import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type UserDataType = {
  id: number | null;
  email: string;
  firstName: string;
  lastName: string;
};

const initialState: UserDataType = {
  id: null,
  email: '',
  firstName: '',
  lastName: ''
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLogin: (state, action: PayloadAction<UserDataType>) => {
      state = action.payload;
      return state;
    }
  }
});

export const { userLogin } = userSlice.actions;

export default userSlice.reducer;
