import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type UserDataType = {
  id: number | null;
  email: string;
  cccd: string;
  username: string;
  dob: string | number | Date | null | undefined;
  gender: string;
  province: string;
  district: string;
  ward: string;
  password: string;
};

const initialState: UserDataType = {
  id: null,
  email: '',
  cccd: '',
  username: '',
  dob: null,
  gender: '',
  province: '',
  district: '',
  ward: '',
  password: ''
};
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userRegister: (state, action: PayloadAction<UserDataType>) => {
      const updateInfo = action.payload;
      state = { ...state, ...updateInfo };
      return state;
    }
  }
});

export const { userRegister } = userSlice.actions;

export default userSlice.reducer;
