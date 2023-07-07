import * as Yup from 'yup';
export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email không bỏ trống')
    .email('Email không hợp lệ'),
  password: Yup.string()
    .required('Password không bỏ trống')
    .min(8, 'Password phải có ít nhất 8 kí tự')
});
export const forgotSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email không bỏ trống')
    .email('Email không hợp lệ'),
});
