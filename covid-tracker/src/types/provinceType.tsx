export interface WardType {
  code: number | string;
  name: string;
}

export interface DistrictType {
  code: number;
  name: string;
  codename?: string;
  division_type?: string;
  short_codename?: string;
  wards?: WardType[];
}

export interface ProvinceType {
  code: number;
  name: string;
  codename?: string;
  division_type?: string;
  phone_code?: number;
  districts?: DistrictType[];
}
