import { Container, Stack, Step, StepLabel, Stepper } from '@mui/material';
import React, { useState } from 'react';
import InforPrivateStep from './InforPrivateStep';
import ConfirmRegistration from './ConfirmRegistration';
import CompleteRegistration from './CompleteRegistration';

const steps = ['Thông tin cá nhân', 'Phiếu đồng ý tiêm', 'Hoàn thành'];
export type ActiveStepAvailabel = 0 | 1 | 2;
export interface VaccineRegistrationProps {
  activeStep: ActiveStepAvailabel;
  setActiveStep: React.Dispatch<React.SetStateAction<ActiveStepAvailabel>>;
}
function StepRegistration() {
  const [activeStep, setActiveStep] = useState<ActiveStepAvailabel>(0);
  const getStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <InforPrivateStep
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        );
      case 1:
        return (
          <ConfirmRegistration
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        );
      case 2:
        return (
          <CompleteRegistration
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        );
      default: {
        break;
      }
    }
  };
  return (
    <Stack width="100%" spacing={8}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Container disableGutters maxWidth={false} sx={{ px: '36px' }}>
        {getStepContent()}
      </Container>
    </Stack>
  );
}

export default StepRegistration;
