import React from 'react';
import Headers from '../../../components/Header/Header';
import { Stack } from '@mui/material';
import Footer from '../../../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
export default function Home() {
  return (
    <Stack minHeight="100vh" justifyContent="space-between">
      <Headers />
      <Outlet />
      <Footer />
    </Stack>
  );
}
