import React, { useState } from 'react';
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
import { Link as RouterLink } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { forgotSchema } from '../../validations/validationSchema';
import PageLoading from '../../components/PageLoading/PageLoading';
import InputController from '../../components/InputController/InputController';
import { ButtonActive, ButtonCancel } from '../../style/styleButton';

export type ForgotDataType = {
  email: string;
};

export const defaultValues: DefaultValues<ForgotDataType> = {
  email: ''
};
export default function ForgotPassword() {
  const [loading, setLoading] = useState<Boolean>(false);
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors, isValid }
  } = useForm<ForgotDataType>({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(forgotSchema)
  });

  const onSubmit: SubmitHandler<ForgotDataType> = (data) => {
    setTimeout(() => {
      setLoading(false);
      navigate('/');
    }, 2000);
    setLoading(true);
  };
  return (
    <>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <AuthLayout />
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          component={Paper}
          elevation={6}
          container
          justifyContent="center">
          <Stack
            sx={{
              width: '80%',
              minHeight: '100vh'
            }}
            spacing={2}
            alignItems="center"
            justifyContent="center"
            component="form"
            onSubmit={handleSubmit(onSubmit)}>
            <Typography
              component="h6"
              sx={{
                fontSize: '16px',
                fontWeight: 700
              }}>
              Để khôi phục mật khẩu, vui lòng nhập đúng email bạn đã dùng để
              đăng ký
              <Box component="span" sx={{ color: 'red' }}>
                {` `}(*)
              </Box>
            </Typography>
            <Box sx={{ width: '100%' }}>
              <InputController
                placeholder="Email"
                type="email"
                helperText={errors?.email?.message}
                name="email"
                control={control}
              />
            </Box>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              margin="12px 0"
              spacing={2}
              sx={{ width: '100%' }}>
              <RouterLink to={'/portal/login-organ'}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    ...ButtonCancel
                  }}>
                  QUAY LẠI
                </Button>
              </RouterLink>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  ...ButtonActive
                }}
                disabled={!isValid || loading ? true : false}>
                GỬI
              </Button>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      <PageLoading open={loading} />
    </>
  );
}
