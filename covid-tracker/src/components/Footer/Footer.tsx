import { Button, Stack, Typography, Box } from '@mui/material';
import React, { FC } from 'react';
import imgLogo from '../../assets/img/logic_covid.png';
import handelCert from '../../assets/img/handle_cert 1.png';
const ButtonCustomer: FC<{ label: string }> = ({ label }) => {
  return (
    <Button
      variant="outlined"
      sx={{
        borderColor: '#fff',
        borderBottomLeftRadius: '0',

        color: '#fff',
        '&:hover': {
          opacity: 0.9,
          backgroundColor: ' #ffffff',
          border: '1px solid #ffffff',
          color: '#303F9F'
        }
      }}>
      {label}
    </Button>
  );
};
function Footer() {
  return (
    <Stack
      marginTop={10}
      direction="row"
      justifyContent="space-between"
      padding="32px 16px"
      sx={{ backgroundColor: '#2D2188', color: 'white' }}>
      <Stack>
        <Typography>
          © Bản quyền thuộc{' '}
          <Typography
            component="span"
            textTransform="uppercase"
            fontWeight={700}
            fontSize="14px">
            TRUNG TÂM CÔNG NGHỆ PHÒNG, CHỐNG DỊCH COVID-19 QUỐC GIA
          </Typography>
        </Typography>
        <Typography align="left">
          Phát triển bởi{' '}
          <Typography component="span" color="red">
            Viettel
          </Typography>
        </Typography>
        <Box component="img" src={imgLogo} height="89px" width=" 195px" />
      </Stack>
      <Stack spacing={2} alignItems="flex-end">
        <Typography>
          Tải sổ sức khỏe điện tử để đăng ký tiêm và nhận giấy chứng nhận tiêm
        </Typography>
        <Stack direction="row" spacing={2}>
          <ButtonCustomer label={'App tiêm di động (Cho HCM)'} />
          <ButtonCustomer label={'App Store'} />
          <ButtonCustomer label={'Google Play'} />
        </Stack>
        <Box
          component="img"
          src={handelCert}
          width="220px"
          height="100px"
          marginLeft={0}
        />
      </Stack>
    </Stack>
  );
}

export default Footer;
