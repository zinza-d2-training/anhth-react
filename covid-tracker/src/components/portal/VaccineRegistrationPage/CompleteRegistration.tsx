import React, { useEffect, useState } from 'react';
import { Stack, Typography, Button, Grid } from '@mui/material';
import { ButtonActive, ButtonCancel } from '../../../style/styleButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
  ActiveStepAvailabel,
  VaccineRegistrationProps
} from './StepRegistration';
import { VaccineRegistrationDataType } from './InforPrivateStep';
import { getDataLocal } from '../../../data/getDataLocal';
import { UserDataType } from '../../../store/userSlice';
import { useNavigate } from 'react-router-dom';
import {
  getDataDistrict,
  getDataProvince,
  getDataWard
  // getDataWard
} from '../../../data/getDataLocation';
function CompleteRegistration({ setActiveStep }: VaccineRegistrationProps) {
  const navigave = useNavigate();
  const backStep = () => {
    setActiveStep(
      (prev): ActiveStepAvailabel => (prev - 1) as ActiveStepAvailabel
    );
  };
  const exportInfo = () => {
    alert('Success');
    navigave('/');
  };
  const [dataVaccineResult, setDataVaccineResult] = useState<
    VaccineRegistrationDataType | undefined
  >();
  const [dataUserCurrent, setDataUserCurrent] = useState<
    UserDataType | undefined
  >();

  useEffect(() => {
    const getData = getDataLocal();
    if (getData) {
      const {
        user,
        vaccineRegisters
      }: {
        user: UserDataType;
        vaccineRegisters: VaccineRegistrationDataType[];
      } = getData;

      const currentVaccineRegister =
        vaccineRegisters[vaccineRegisters.length - 1];

      setDataUserCurrent(user);
      setDataVaccineResult(currentVaccineRegister);
    }
  }, []);
  return (
    <Stack spacing={4}>
      <Typography sx={{ fontWeight: '700' }} variant="h6">
        Đăng ký tiêm chủng COVID-19 thành công. Mã đặt tiêm của bạn là
        <Typography component="span" sx={{ fontWeight: '700' }} color="#EF5350">
          {' '}
          0120211103501237
        </Typography>
      </Typography>
      <Typography>
        Cảm ơn quý khách đã đăng ký tiêm chủng vắc xin COVID-19. Hiện tại Bộ y
        tế đang tiến hành thu thập nhu cầu và thông tin để lập danh sách đối
        tượng đăng ký tiêm vắc xin COVID-19 theo từng địa bàn. Chúng tôi sẽ liên
        hệ với quý khách theo số điện thoại{' '}
        <Typography component="span" color="#1E88E5">
          0123456789
        </Typography>{' '}
        khi có kế hoạch tiêm trong thời gian sớm nhất.
      </Typography>
      <Typography>
        Mời bạn tải ứng dụng "SỔ SỨC KHỎE ĐIỆN TỬ" tại{' '}
        <Typography component="span" color="#EF5350">
          https://hssk.kcb.vn/#/sskdt
        </Typography>{' '}
        để theo dõi kết quả đăng ký tiêm và nhận chứng nhận tiêm chủng COVID-19{' '}
      </Typography>
      <Grid container spacing={4} textAlign="left" mt={2}>
        <Grid item xs={4}>
          <Typography>Họ và tên</Typography>
          <Typography fontWeight={700}>{dataUserCurrent?.username}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>Ngày sinh</Typography>
          <Typography fontWeight={700}>
            {dataUserCurrent?.dob as string}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>Giới tính</Typography>
          <Typography fontWeight={700}>
            {Number(dataUserCurrent?.gender) === 1 ? 'Nam' : 'Nữ'}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>Số CMND/CCCD/Mã định danh công dân</Typography>
          <Typography fontWeight={700}>{dataUserCurrent?.cccd}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>Số thẻ BHYT</Typography>
          <Typography fontWeight={700}>{dataVaccineResult?.bhyt}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>Địa chỉ hiện tại</Typography>
          <Typography fontWeight={700}>
            {dataVaccineResult?.currentAddress}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>Tỉnh/Thành phố</Typography>
          <Typography fontWeight={700}>
            {dataUserCurrent?.province
              ? getDataProvince(dataUserCurrent.province)?.name
              : 'Loading...'}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>Quận/Huyện</Typography>
          <Typography fontWeight={700}>
            {dataUserCurrent?.province && dataUserCurrent?.district
              ? getDataDistrict(
                  dataUserCurrent.province,
                  dataUserCurrent.district
                )?.name
              : 'Loading...'}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>Xã/Phường</Typography>
          <Typography fontWeight={700}>
            {dataUserCurrent?.province && dataUserCurrent?.district
              ? getDataWard(
                  dataUserCurrent?.province,
                  dataUserCurrent?.district,
                  dataUserCurrent?.ward
                )?.name
              : 'Loading...'}
          </Typography>
        </Grid>
      </Grid>
      <Stack spacing={2} direction="row" justifyContent="center">
        <Button
          type="submit"
          variant="contained"
          onClick={backStep}
          sx={{
            ...ButtonCancel
          }}>
          <ArrowBackIcon sx={{ margin: '0 5px' }} />
          HỦY BỎ
        </Button>
        <Button
          onClick={exportInfo}
          variant="contained"
          sx={{
            ...ButtonActive
          }}>
          XUẤT THÔNG TIN
          <ArrowForwardIcon sx={{ margin: '0 5px' }} />
        </Button>
      </Stack>
    </Stack>
  );
}

export default CompleteRegistration;
