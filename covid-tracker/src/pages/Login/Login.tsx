import React, { useState } from 'react';
import {
  Button,
  CssBaseline,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
  Stack
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { DefaultValues, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../validations/validationAuthSchema';
import PageLoading from '../../components/PageLoading/PageLoading';
import { useAppDispatch } from '../../hook';
import { userLogin } from '../../store/userSlice';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../../components/AuthLayout/AuthLayout';
import InputController from '../../components/ReuseComponent/InputController';

export type LoginDataType = {
  email: string;
  password: string;
};

export const defaultValues: DefaultValues<LoginDataType> = {
  email: '',
  password: ''
};

export default function Login() {
  const [loading, setLoading] = useState<Boolean>(false);
  const [isError, setError] = useState<Boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors, isValid }
  } = useForm<LoginDataType>({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(loginSchema)
  });

  const onSubmit: SubmitHandler<LoginDataType> = (data) => {
    setTimeout(() => {
      setLoading(false);
      dispatch(
        userLogin({
          email: data.email,
          firstName: 'Trung Anh',
          lastName: 'Hoàng',
          id: 1
        })
      );
      navigate('/');
    }, 2000);
    setLoading(true);
  };
  return (
    <>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <AuthLayout />
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6}>
          <Box
            sx={{
              width: '100%',
              minHeight: '100vh',
              display: 'flex',
              direction: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            component="form"
            onSubmit={handleSubmit(onSubmit)}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  fontSize: '30px'
                }}
                onClick={() => console.log(errors)}>
                Đăng nhập vào tài khoản
              </Typography>
              <Box sx={{ width: '100%' }}>
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
                  control={control}
                  typography="Password"
                />
              </Box>
              <Typography align="right" width="100%">
                <RouterLink
                  to={'/portal/password-forgot'}
                  style={{ textDecoration: 'none' }}>
                  <Link
                    component="span"
                    sx={{
                      fontSize: '14px',
                      textDecoration: 'none',
                      color: '#3949AB'
                    }}>
                    Quên mật khẩu?
                  </Link>
                </RouterLink>
              </Typography>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: '#66BB6A',
                  '&:hover': {
                    backgroundColor: '#66BB6A'
                  },
                  textTransform: 'none',
                  fontWeight: '700'
                }}
                disabled={!isValid || loading ? true : false}>
                Đăng nhập
              </Button>
              {isError ? (
                <Typography color="red" margin="5px !important" fontSize="15px">
                  Server trả về lỗi
                </Typography>
              ) : (
                ''
              )}
              <Typography>
                Hoặc đăng ký tài khoản, nếu bạn chưa đăng ký !
              </Typography>
              <RouterLink to="/portal/register-organ" style={{ width: '100%' }}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    fontWeight: '900',
                    backgroundColor: 'white',
                    border: '1px solid #9CCC65',
                    color: '#9CCC65',
                    '&:hover': {
                      backgroundColor: '#66BB6A',
                      color: 'white'
                    },
                    textTransform: 'none'
                  }}>
                  Đăng ký
                </Button>
              </RouterLink>
            </Stack>
          </Box>
        </Grid>
      </Grid>
      <PageLoading open={loading} />
    </>
  );
}
