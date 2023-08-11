import * as Yup from 'yup';
export const vaccineRegistrationSchema = Yup.object().shape({
  priorityType: Yup.string().required('Chọn đối tượng ưu tiên tiêm'),
  bhyt: Yup.string()
    .trim()
    .matches(/^[A-Za-z]{2}\d{13}$/, 'Không đúng định dạng. Ex: HS4017424778075')
    .required('Điền số thẻ bảo hiểm y tế'),
  job: Yup.string().required('Chọn nghề nghiệp bạn muốn đăng ký'),
  wordunit: Yup.string().required('Chọn đơn vị công tác bạn muốn đăng ký'),
  currentAddress: Yup.string().required(
    'Chọn dịa chỉ hiện tại bạn muốn đăng ký'
  ),
  expectedVaccinationDate: Yup.date()
    .required('Không bỏ trống ngày')
    .typeError('Vui lòng nhập đúng định dạng ngày sinh')
    .test(
      'is-age-greater-than-5',
      'Thời gian phải được hẹn trước ngày hôm nay',
      function (value) {
        const dayChoice = new Date(value);
        const dayNow = new Date();
        if (dayNow > dayChoice) return false;
        return true;
      }
    ),
  dayPart: Yup.string().required('Chọn buổi tiêm bạn muốn đăng ký')
});
