import React from 'react';
import { Stack, Typography } from '@mui/material';
import StepRegistration from './StepRegistration';

function VaccineRegistration() {
  return (
    <Stack spacing={4} py={4}>
      <Typography
        variant="h5"
        align="left"
        padding="12.33px 36px"
        marginTop={8}
        width="100%"
        sx={{ backgroundColor: '#F5F5F5' }}>
        Tra cứu đăng ký tiêm
      </Typography>
      <StepRegistration />
    </Stack>
  );
}

export default VaccineRegistration;
