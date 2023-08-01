import React from 'react';
import TotalStats from './TotalStats';
import LineChartStats from './LineChartStats';
import { Container } from '@mui/material';

function ContainerHome() {
  return (
    <Container maxWidth="xl">
      <TotalStats />
      <LineChartStats />
    </Container>
  );
}

export default ContainerHome;
