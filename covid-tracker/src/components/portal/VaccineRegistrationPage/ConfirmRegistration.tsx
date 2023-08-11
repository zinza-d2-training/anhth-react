import React from 'react';
import imgProtect from '../../../assets/img/protect_confirm.png';
import imgNeedle from '../../../assets/img/needle_confirm.png';
import imgHospital from '../../../assets/img/hospital_confirm.png';
import { ButtonActive, ButtonCancel } from '../../../style/styleButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography
} from '@mui/material';
import {
  ActiveStepAvailabel,
  VaccineRegistrationProps
} from './StepRegistration';
import { check } from 'prettier';
const term = [
  {
    id: 1,
    icon: imgProtect,
    title:
      'Tiêm chủng vắc xin là biện pháp phòng chống dịch hiệu quả, tuy nhiên vắc xin phòng COVID-19 có thể không phòng được bệnh hoàn toàn. Người được tiêm chủng vắc xin phòng COVID-19 có thể phòng được bệnh hoặc giảm mức độ nặng nếu mắc bệnh. Tuy nhiên, sau khi tiêm chủng vẫn phải tiếp tục thực hiện nghiêm các biện pháp phòng chống dịch theo quy định.'
  },
  {
    id: 2,
    icon: imgNeedle,
    title:
      'Tiêm chủng vắc xin phòng COVID-19 có thể gây ra một số biểu hiện tại chỗ tiêm hoặc toàn thân như sưng, đau chỗ tiêm, nhức đầu, buồn nôn, sốt, đau cơ…hoặc tai biến nặng sau tiêm chủng. Tiêm vắc xin mũi 2 do Pfizer sản xuất ở người đã tiêm mũi 1 bằng vắc xin AstraZeneca có thể tăng khả năng xảy ra phản ứng thông thường sau tiêm chủng.'
  },
  {
    id: 3,
    icon: imgHospital,
    title:
      'Khi có triệu chứng bất thường về sức khỏe, người được tiêm chủng cần đến ngay cơ sở y tế gần nhất để được tư vấn, thăm khám và điều trị kịp thời.'
  }
];
function ConfirmRegistration({
  activeStep,
  setActiveStep
}: VaccineRegistrationProps) {
  const [checked, setChecked] = React.useState<boolean>(false);
  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };
  const backStep = () => {
    setActiveStep(
      (prev): ActiveStepAvailabel => (prev - 1) as ActiveStepAvailabel
    );
  };
  const nextStep = () => {
    setActiveStep(
      (prev): ActiveStepAvailabel => (prev + 1) as ActiveStepAvailabel
    );
  };
  return (
    <Stack spacing={4}>
      {term.map((item) => {
        return (
          <Stack direction="row" key={item.id} alignItems="center">
            <Box
              component="img"
              src={item.icon}
              width={24}
              height={24}
              marginRight={2}></Box>
            <Typography align="left">{`${item.id}. ${item.title}`}</Typography>
          </Stack>
        );
      })}
      <Divider sx={{ my: 3, borderBottomWidth: 2 }} />
      <Stack direction="row" alignItems="center">
        <Typography>
          Sau khi đã đọc các thông tin nêu trên, tôi đã hiểu về các nguy cơ và:{' '}
        </Typography>
        <FormGroup>
          <FormControlLabel
            sx={{ ml: 1 }}
            label="Đồng ý tiêm chủng"
            control={<Checkbox checked={checked} onChange={handleChecked} />}
          />
        </FormGroup>
      </Stack>
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
          type="submit"
          variant="contained"
          onClick={nextStep}
          sx={{
            ...ButtonActive
          }}
          disabled={!checked ? true : false}>
          TIẾP TỤC
          <ArrowForwardIcon sx={{ margin: '0 5px' }} />
        </Button>
      </Stack>
    </Stack>
  );
}

export default ConfirmRegistration;
