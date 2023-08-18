import { VaccineRegistrationDataType } from '../components/portal/VaccineRegistrationPage/InforPrivateStep';
import { UserDataType } from '../store/userSlice';

export const getDataLocal = () => {
  const persistedDataString = localStorage.getItem('persist:root');
  if (persistedDataString === null) return;
  const vaccineRegistrationCompeleted =
    JSON.parse(persistedDataString).vaccineRegister;
  const informationUserRegistration = JSON.parse(persistedDataString).user;
  const dataUserRegistration: UserDataType = JSON.parse(
    informationUserRegistration
  );
  const dataCompeletedVaccine: VaccineRegistrationDataType = JSON.parse(
    vaccineRegistrationCompeleted
  );
  const dataUserCurrent = {
    user: dataUserRegistration,
    vaccineRegisters: [dataCompeletedVaccine]
  };
  return dataUserCurrent;
};
