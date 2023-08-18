import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { VaccineRegistrationDataType } from '../components/portal/VaccineRegistrationPage/InforPrivateStep';
const initialState: VaccineRegistrationDataType = {
  priorityType: '',
  bhyt: '',
  job: '',
  wordunit: '',
  currentAddress: '',
  expectedVaccinationDate: null,
  dayPart: ''
};
export const vaccineRegistrationSlice = createSlice({
  name: 'vaccineRegister',
  initialState,
  reducers: {
    vaccineRegistrationInfor: (
      state,
      action: PayloadAction<VaccineRegistrationDataType>
    ) => {
      state = action.payload;
      return state;
    }
  }
});

export const { vaccineRegistrationInfor } = vaccineRegistrationSlice.actions;

export default vaccineRegistrationSlice.reducer;
