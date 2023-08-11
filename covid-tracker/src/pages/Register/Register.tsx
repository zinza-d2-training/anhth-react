import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  CssBaseline,
  Paper,
  Box,
  Grid,
  Typography,
  Stack
} from '@mui/material';
import AuthLayout from '../../components/AuthLayout/AuthLayout';
import { DefaultValues, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '../../validations/validationAuthSchema';
import PageLoading from '../../components/PageLoading/PageLoading';
import { InputController } from '../../components/ReuseComponent/InputController';
import { ButtonCancel } from '../../style/styleButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { DateController } from '../../components/ReuseComponent/DateController';
import { SelectorController } from '../../components/ReuseComponent/SelectorController';
import { provinces } from '../../api/provinceAPI.js';
import { useDispatch } from 'react-redux';
import { userRegister } from '../../store/userSlice';
import dayjs from 'dayjs';

export type RegisterDataType = {
  email: string;
  password: string;
  cccd: string;
  username: string;
  dob: string | number | Date | null | undefined;
  gender: string;
  province: string;
  district: string;
  ward: string;
};

export const defaultValues: DefaultValues<RegisterDataType> = {
  email: '',
  password: '',
  cccd: '',
  username: '',
  dob: null,
  gender: '',
  province: '',
  district: '',
  ward: ''
};

export default function Register() {
  const [loading, setLoading] = useState<Boolean>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    getValues,
    watch,
    formState: { errors, isValid }
  } = useForm<RegisterDataType>({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver<RegisterDataType>(registerSchema)
  });

  const onSubmit: SubmitHandler<RegisterDataType> = (data) => {
    setTimeout(() => {
      setLoading(false);
      const dob = dayjs(data.dob).format('DD/MM/YYYY');
      dispatch(
        userRegister({
          id: 1,
          ...data,
          dob
        })
      );
      navigate('/portal/login-organ');
    }, 2000);
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
    setWardOption([{}]);
  }, [changeProvinceWatch, getValues, DistrictOption]);

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
  }, [changeDistrictWatch, getValues, WardOption]);

  return (
    <>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <AuthLayout />
        <Grid
          item
          xs={12}
          sm={7}
          md={6}
          component={Paper}
          elevation={6}
          container
          justifyContent="center"
          sx={{
            height: '100vh',
            overflowY: 'auto',
            '&::-webkit-scrollbar': {
              width: '8px'
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              borderRadius: '10px'
            }
          }}>
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{
              minWidth: '60%',
              margin: '10% 0'
            }}
            spacing={5}
            component="form"
            onSubmit={handleSubmit(onSubmit)}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                fontSize: '30px'
              }}>
              Đăng ký tài khoản
            </Typography>
            <Box sx={{ width: '100%' }}>
              <InputController
                type="cccd"
                helperText={errors?.cccd?.message}
                name="cccd"
                control={control}
                typography="Số CMND/CCCD"
              />
              <InputController
                type="email"
                helperText={errors?.email?.message}
                name="email"
                control={control}
                typography="Email"
              />
              <InputController
                type="password"
                helperText={errors?.password?.message}
                name="password"
                typography="Mật Khẩu"
                control={control}
              />
              <InputController
                type="username"
                helperText={errors?.username?.message}
                name="username"
                control={control}
                typography="Họ và tên"
              />
              <DateController
                name="dob"
                typography="Ngày sinh"
                helperText={errors?.dob?.message}
                control={control}
              />
              <SelectorController
                required
                selectors={[
                  { value: 1, label: 'Nam' },
                  { value: 2, label: 'Nữ' }
                ]}
                typography="Giới tính"
                helperText={errors?.gender?.message}
                control={control}
                name="gender"
              />
              <SelectorController
                required
                helperText={errors?.province?.message}
                control={control}
                selectors={provinces}
                typography="Tỉnh/Thành phố"
                name="province"
              />
              <SelectorController
                required
                helperText={errors?.district?.message}
                name="district"
                control={control}
                selectors={DistrictOption}
                typography="Quận/Huyện"
              />
              <SelectorController
                required
                helperText={errors?.ward?.message}
                name="ward"
                control={control}
                selectors={WardOption}
                typography="Xã/Phường"
              />
            </Box>
            <Box
              style={{
                width: '100%',
                justifyContent: 'flex-end',
                display: 'flex'
              }}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  ...(isValid && !loading
                    ? {
                        ...ButtonCancel,
                        color: '#3F51B5'
                      }
                    : {})
                }}
                disabled={!isValid || loading ? true : false}>
                TIẾP TỤC{' '}
                {isValid && !loading ? (
                  <ArrowForwardIcon
                    sx={{
                      marginLeft: '5px',
                      color: '#3F51B5'
                    }}
                  />
                ) : (
                  <></>
                )}
              </Button>
            </Box>
          </Stack>
        </Grid>
      </Grid>
      <PageLoading open={loading} />
    </>
  );
}
