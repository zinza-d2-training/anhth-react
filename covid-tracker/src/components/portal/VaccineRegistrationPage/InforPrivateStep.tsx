import { Stack, Typography, Grid, Button } from '@mui/material';
import React, { useState } from 'react';
import { SelectorController } from '../../ReuseComponent/SelectorController';
import { DefaultValues, SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { minds } from './FormModel/utils/mindWarning';
import { ButtonActive, ButtonCancel } from '../../../style/styleButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
  ActiveStepAvailabel,
  VaccineRegistrationProps
} from './StepRegistration';
import { priorityGroup } from './FormModel/utils/priorityGroup';
import { vaccineRegistrationSchema } from '../../../validations/validationVaccineRegistrationSchema';
import { InputController } from '../../ReuseComponent/InputController';
import { jobs } from './FormModel/utils/jobs';
import { dayParts } from './FormModel/utils/dayParts';
import { DateController } from '../../ReuseComponent/DateController';
import { useDispatch } from 'react-redux';
import { vaccineRegistrationInfor } from '../../../store/vaccineRegistrationSlice';
import PageLoading from '../../PageLoading/PageLoading';

export type VaccineRegistrationDataType = {
  priorityType: string | number;
  bhyt: string;
  job: string;
  wordunit: string;
  currentAddress: string;
  expectedVaccinationDate: string | number | Date | null | undefined;
  dayPart: string;
};

export const defaultValues: DefaultValues<VaccineRegistrationDataType> = {
  priorityType: '',
  bhyt: '',
  job: '',
  wordunit: '',
  currentAddress: '',
  expectedVaccinationDate: null,
  dayPart: ''
};
function InforPrivateStep({
  activeStep,
  setActiveStep
}: VaccineRegistrationProps) {
  const [loading, setLoading] = useState<Boolean>(false);
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    formState: { errors, isValid }
  } = useForm<VaccineRegistrationDataType>({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver<VaccineRegistrationDataType>(
      vaccineRegistrationSchema
    )
  });

  const onSubmit: SubmitHandler<VaccineRegistrationDataType> = (data) => {
    setTimeout(() => {
      dispatch(vaccineRegistrationInfor(data));
      setLoading(false);
      nextStep();
    }, 2000);
    setLoading(true);
  };

  const nextStep = () => {
    setActiveStep(
      (prev): ActiveStepAvailabel => (prev + 1) as ActiveStepAvailabel
    );
  };
  return (
    <>
      <Stack
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        spacing={2}
        sx={{
          textAlign: 'left'
        }}>
        <Typography fontWeight={700}>
          1. Thông tin người đăng ký tiêm
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <SelectorController
              typography="Nhóm ưu tiên"
              required
              helperText={errors?.priorityType?.message}
              control={control}
              selectors={priorityGroup}
              name="priorityType"
              size="small"
              placeholder="Nhóm ưu tiên"
            />
          </Grid>
          <Grid item xs={3}>
            <InputController
              type="bhyt"
              helperText={errors?.bhyt?.message}
              name="bhyt"
              size="small"
              control={control}
              typography="Số thẻ BHYT"
              placeholder="Số thẻ BHYT"
            />
          </Grid>
          <Grid item xs={3} />
          <Grid item xs={3} />
          <Grid item xs={3}>
            <SelectorController
              typography="Nghề nghiệp"
              placeholder="Nghề nghiệp"
              required
              helperText={errors?.job?.message}
              control={control}
              selectors={jobs}
              name="job"
              size="small"
            />
          </Grid>
          <Grid item xs={3}>
            <InputController
              helperText={errors?.wordunit?.message}
              name="wordunit"
              size="small"
              control={control}
              typography="Đơn vị công tác"
              placeholder="Đơn vị công tác"
            />
          </Grid>
          <Grid item xs={3}>
            <InputController
              helperText={errors?.currentAddress?.message}
              name="currentAddress"
              size="small"
              control={control}
              typography="Địa chỉ hiện tại"
              placeholder="Địa chỉ hiện tại"
            />
          </Grid>
          <Grid item xs={3} />
        </Grid>
        <Typography fontWeight={700}>
          2. Thông tin đăng ký tiêm chủng
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <DateController
              size="small"
              typography="Ngày muốn được tiêm dự kiến"
              helperText={errors?.expectedVaccinationDate?.message}
              name="expectedVaccinationDate"
              control={control}
            />
          </Grid>
          <Grid item xs={3}>
            <SelectorController
              typography="Buổi tiêm mong muốn"
              placeholder="Buổi tiêm mong muốn"
              required
              helperText={errors?.dayPart?.message}
              control={control}
              selectors={dayParts}
              name="dayPart"
              size="small"
            />
          </Grid>
          <Grid item xs={3} />
          <Grid item xs={3} />
        </Grid>
        <Stack spacing={1} color="red">
          <Typography fontSize="16px" fontWeight={700}>
            Lưu ý:
          </Typography>
          {minds.map((item, index) => {
            return (
              <Typography component="li" key={index}>
                {item}
              </Typography>
            );
          })}
        </Stack>
        <Stack spacing={2} direction="row" justifyContent="center">
          <Link to="/">
            <Button
              type="submit"
              variant="contained"
              sx={{
                ...ButtonCancel
              }}>
              <ArrowBackIcon sx={{ margin: '0 5px' }} />
              HỦY BỎ
            </Button>
          </Link>
          <Button
            type="submit"
            variant="contained"
            sx={{
              ...ButtonActive
            }}
            disabled={!isValid || loading ? true : false}>
            TIẾP TỤC
            <ArrowForwardIcon sx={{ margin: '0 5px' }} />
          </Button>
        </Stack>
      </Stack>
      <PageLoading open={loading} />
    </>
  );
}

export default InforPrivateStep;
