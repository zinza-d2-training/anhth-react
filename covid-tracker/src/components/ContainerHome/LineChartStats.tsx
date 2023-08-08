import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Typography, Stack, Box } from '@mui/material';

import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import dayjs from 'dayjs';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
      display: false
    }
  }
};

function getSequentialDates(fromDate: Date, toDate: Date): Date[] {
  const dates = [];
  let currentDate = new Date(fromDate);
  while (currentDate <= toDate) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dates;
}
const startDate = new Date('2021-09-21');
const endDate = new Date('2021-10-20');
const sequentialDates = getSequentialDates(startDate, endDate);

const labels = sequentialDates.map((date) => dayjs(date).format('DD/MM'));
export const data = {
  labels,
  datasets: [
    {
      label: 'Đã tiêm',
      data: labels.map(() => faker.number.int({ min: 400000, max: 2200000 })),
      borderColor: '#281BA4',
      backgroundColor: '#EE0033'
    }
  ]
};

function LineChartStats() {
  return (
    <Stack
      sx={{
        p: '24px 16px',
        boxShadow: 2,
        mt: '84px',
        borderRadius: '10px'
      }}>
      <Typography variant="h6" fontSize={20} fontWeight={700} align="left">
        Dữ liệu tiêm theo ngày
      </Typography>
      <Stack direction="row" justifyContent="center" alignItems="center">
        <Box
          width={48}
          height={17}
          sx={{ backgroundColor: '#281BA4', mr: '5px' }}></Box>
        <Typography>Đã Tiêm</Typography>
      </Stack>
      <Line options={options} data={data} />
    </Stack>
  );
}

export default LineChartStats;
