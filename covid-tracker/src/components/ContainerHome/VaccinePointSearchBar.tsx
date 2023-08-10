import { Stack, Button, Box } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { DefaultValues, SubmitHandler, useForm } from 'react-hook-form';
import { SelectorController } from '../../components/ReuseComponent/SelectorController';
import { provinces } from '../../api/provinceAPI.js';
import SearchIcon from '@mui/icons-material/Search';
export type VaccinePointSearchType = {
  province: string;
  district: string;
  ward: string;
};

export const defaultValues: DefaultValues<VaccinePointSearchType> = {
  province: '',
  district: '',
  ward: ''
};

interface VaccinePointSearchBarProps {
  handleUpdateDataWard: (filterWard: number) => void;
  setInitRows: () => void;
}

const VaccinePointSearchBar: FC<VaccinePointSearchBarProps> = ({
  handleUpdateDataWard,
  setInitRows
}: VaccinePointSearchBarProps) => {
  const [loading, setLoading] = useState<boolean | undefined>(false);
  const { handleSubmit, control, getValues, setValue, watch } =
    useForm<VaccinePointSearchType>({
      mode: 'onChange',
      defaultValues
    });
  const changeWardWatch = watch('ward');
  useEffect(() => {
    if (!getValues('ward')) setInitRows();
  }, [getValues, changeWardWatch, setInitRows]);

  const onSubmit: SubmitHandler<VaccinePointSearchType> = (data) => {
    setTimeout(() => {
      setLoading(false);
      handleUpdateDataWard(Number(data.ward));
    }, 500);
    setLoading(true);
  };

  const [DistrictOption, setDistricOption] = useState([{}]);
  const [WardOption, setWardOption] = useState([{}]);
  const changeProvinceWatch = watch('province');
  const changeDistrictWatch = watch('district');
  useEffect(() => {
    const getDistrictOptions = () => {
      if (!getValues('province')) return [];
      const selectedProvince = Number(getValues('province'));
      const province = provinces.find((province) => {
        return province.code === selectedProvince;
      });
      if (province) {
        return province.districts;
      }
      return [];
    };
    const options = getDistrictOptions();
    setDistricOption(options);
    setValue('district', '');
  }, [changeProvinceWatch, getValues, setValue, DistrictOption]);

  useEffect(() => {
    const getWardOptions = () => {
      if (!getValues('district')) return [];
      const selectedProvince = Number(getValues('province'));
      const selectedDistrict = Number(getValues('district'));
      const province = provinces.find((province) => {
        return province.code === selectedProvince;
      });
      const district = province?.districts.find((district) => {
        return district.code === selectedDistrict;
      });
      if (district) {
        return district.wards;
      }
      return [];
    };

    const options = getWardOptions();
    setWardOption(options);
    setValue('ward', '');
  }, [changeDistrictWatch, setValue, getValues, WardOption]);

  return (
    <>
      <Stack
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        direction="row"
        spacing={2}>
        <Box width="23%">
          <SelectorController
            control={control}
            selectors={provinces}
            name="province"
            size="small"
            placeholder="Tỉnh/Thành phố"
          />
        </Box>
        <Box width="23%">
          <SelectorController
            name="district"
            control={control}
            selectors={DistrictOption}
            size="small"
            placeholder="Quận/Huyện"
          />
        </Box>
        <Box width="23%">
          <SelectorController
            name="ward"
            size="small"
            control={control}
            selectors={WardOption}
            placeholder="Xã/Phường"
          />
        </Box>
        <Box>
          <Button
            type="submit"
            variant="contained"
            size="small"
            sx={{ minHeight: '40px', marginTop: '10px' }}
            disabled={!getValues('ward') || loading ? true : false}>
            <SearchIcon />
            Tìm kiếm{' '}
          </Button>
        </Box>
      </Stack>
    </>
  );
};

export default VaccinePointSearchBar;
