import { provinces } from '../api/provinceAPI';
import { DistrictType, ProvinceType, WardType } from '../types/provinceType';

export const getDataProvince = (
  provinceId: string | number
): ProvinceType | undefined => {
  const provinceNewId = Number(provinceId);
  return provinces.find((province) => provinceNewId === province.code);
};

export const getDataDistrict = (
  provinceId: string | number,
  districtId: string | number
): DistrictType | undefined => {
  const provinceData = getDataProvince(Number(provinceId));
  const districtData = provinceData?.districts?.find(
    (district) => district.code === Number(districtId)
  );
  return districtData;
};

export const getDataWard = (
  provinceId: string | number,
  districtId: string | number,
  wardId: string | number
): WardType | undefined => {
  const districtData = getDataDistrict(Number(provinceId), Number(districtId));
  const wardData = districtData?.wards?.find(
    (ward) => ward.code === Number(wardId)
  );
  return wardData;
};

// export const getDataWard = (
//   provinceId: string | number,
//   districtId: string | number,
//   wardId: string | number
// ) => {
//   const provinceNewId = Number(provinceId);
//   const districtNewId = Number(districtId);
//   const wardNewId = Number(wardId);
//   if (provinceNewId === undefined || districtNewId === null) return {};
//   const { wards } = getDataDistrict(provinceNewId, districtNewId);
//   const wardData = wards.find((ward: any) => {
//     return wardNewId === ward.code;
//   });
//   return wardData;
// };
