import React from 'react';
import TotalStats from './TotalStats';
import LineChartStats from './LineChartStats';
import { Container } from '@mui/material';
import VaccinePointsByLocation from './VaccinePointsByLocation';

function ContainerHome() {
  return (
    <Container maxWidth="xl">
      <TotalStats />
      <LineChartStats />
      <VaccinePointsByLocation />
    </Container>
  );
}

export default ContainerHome;
