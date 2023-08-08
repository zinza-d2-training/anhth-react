import * as Yup from 'yup';
export const searchLocationSchema = Yup.object().shape({
  // province: Yup.string().required('Chọn tỉnh thành bạn muốn đăng ký'),
  // district: Yup.string().required('Chọn quận huyện bạn muốn đăng ký'),
  // ward: Yup.string().required('Chọn xã bạn muốn đăng ký')
});
