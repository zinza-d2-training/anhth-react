import React from 'react';
import Headers from '../../../components/Header/Header';
import ContainerHome from '../../../components/ContainerHome/ContainerHome';
import { Stack } from '@mui/material';
export default function Home() {
  return (
    <Stack minHeight="100vh" justifyContent="space-between">
      <Headers />
      <ContainerHome />
    </Stack>
  );
}
