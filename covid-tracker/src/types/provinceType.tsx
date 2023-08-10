export interface Ward {
  code: number | string;
  name: string;
}

interface District {
  code: number | string;
  name: string;
  wards?: Ward[];
}

export interface Province {
  code: number | string;
  name: string;
  districts?: District[];
}
