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
    .email('Email không hợp lệ')
});
export const registerSchema = Yup.object({
  email: Yup.string()
    .required('Email không bỏ trống')
    .email('Email không hợp lệ'),
  password: Yup.string()
    .required('Password không bỏ trống')
    .min(8, 'Password phải có ít nhất 8 kí tự'),
  cccd: Yup.string()
    .required('Căn cước công dân không bỏ trống')
    .min(9, 'Căn cước công dân phải có ít nhất 8 kí tự')
    .max(12, 'Căn cước công dân chỉ có tối đa là 12 kí tự'),
  username: Yup.string().required('Tên người dùng không bỏ trống'),
  dob: Yup.date()
    .required('Không bỏ trống ngày')
    .typeError('Vui lòng nhập đúng định dạng ngày sinh')
    .test(
      'is-age-greater-than-5',
      'Trẻ em phải trên 5 tuổi mới được tiêm vaccine',
      function (value) {
        const currentDate = new Date();
        const birthDate = new Date(value);
        let age = currentDate.getFullYear() - birthDate.getFullYear();
        const monthDiff = currentDate.getMonth() - birthDate.getMonth();
        if (
          monthDiff < 0 ||
          (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())
        ) {
          age = age - 1;
        }
        if (!value) return false;
        return age > 5;
      }
    ),
  gender: Yup.string().required('Giới tính không bỏ trống'),
  province: Yup.string().required('Chọn tỉnh thành bạn muốn đăng ký'),
  district: Yup.string().required('Chọn quận huyện bạn muốn đăng ký'),
  ward: Yup.string().required('Chọn xã bạn muốn đăng ký')
});
