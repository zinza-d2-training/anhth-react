import React, { FC } from 'react';
import { Box, Typography, Stack, Divider } from '@mui/material';
import imageRegisterPeople from '../../assets/img/ic_register_people1.png';
import imageInjection from '../../assets/img/ic_injection.png';
import imageInjectionPeoPle from '../../assets/img/ic_injected_people.png';
interface ItemTypeProps {
  iconUrl: string;
  unit: string;
  label: string;
  quantity: number;
}
const ItemType: FC<ItemTypeProps> = ({ iconUrl, unit, label, quantity }) => {
  return (
    <>
      <Stack
        spacing={2}
        px={2}
        direction="row"
        alignItems="center"
        sx={{ backgroundColor: '#FFFFFF', width: '100%' }}>
        <Box
          component="img"
          width={38}
          height={38}
          sx={{
            margin: '0 16px'
          }}
          alt="The house from the offer."
          src={iconUrl}
        />
        <Stack>
          <Typography fontWeight="700">{label}</Typography>
          <Typography
            sx={{ textAlign: 'left !important' }}
            fontSize="28px"
            fontWeight="700">
            {quantity.toLocaleString()}
            <Box fontSize="13px" display="inline" fontStyle="italic">
              {unit}
            </Box>
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};
function TotalStats() {
  const dataItem = [
    {
      iconUrl: imageRegisterPeople,
      unit: ' (lượt)',
      label: 'Đối tượng đăng ký tiêm',
      quantity: 11203873
    },
    {
      iconUrl: imageInjection,
      unit: ' (mũi)',
      label: 'Số mũi tiêm hôm qua',
      quantity: 1762119
    },
    {
      iconUrl: imageInjectionPeoPle,
      unit: ' (mũi)',
      label: 'Số mũi đã tiêm toàn quốc',
      quantity: 6952365
    }
  ];
  return (
    <>
      <Stack
        mt={10}
        maxWidth="xl"
        sx={{
          padding: '16px 36px',
          backgroundColor: '#F7FBFE'
        }}
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}>
        {dataItem.map((item, index) => {
          return (
            <ItemType
              key={index}
              iconUrl={item.iconUrl}
              unit={item.unit}
              label={item.label}
              quantity={item.quantity}
            />
          );
        })}
      </Stack>
    </>
  );
}

export default TotalStats;
