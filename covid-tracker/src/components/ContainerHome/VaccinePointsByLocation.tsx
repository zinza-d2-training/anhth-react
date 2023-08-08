import React, { useState } from 'react';
import { Stack, Typography } from '@mui/material';
import VaccinePointSearchBar from './VaccinePointSearchBar';
import VaccinePointsTable from './VaccinePointsTable';
import { infoVaccineLocation } from '../../api/locationVaccineAPI';
function VaccinePointsByLocation() {
  const [rows, setRows] = useState(infoVaccineLocation);
  const [page, setPage] = React.useState(0);

  const handleUpdateDataWard = (filterWard: number) => {
    setPage(0);
    let newRows = infoVaccineLocation;
    if (filterWard) {
      newRows = infoVaccineLocation.filter(({ ward }) => {
        const code = ward.code.toString();
        return code === filterWard.toString();
      });
      setRows(newRows);
    }
  };
  const setInitRows = () => {
    setRows(infoVaccineLocation);
  };

  const setPages = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <Stack
      sx={{
        padding: '24px 16px',
        boxShadow: 2,
        marginTop: '84px',
        borderRadius: '10px'
      }}>
      <Typography
        padding="16px 10px"
        align="left"
        fontSize={20}
        fontWeight={700}
        variant="h5">
        Tra cứu điểm tiêm theo địa bàn
      </Typography>
      <VaccinePointSearchBar
        handleUpdateDataWard={handleUpdateDataWard}
        setInitRows={setInitRows}
      />
      <VaccinePointsTable rows={rows} page={page} setPages={setPages} />
    </Stack>
  );
}

export default VaccinePointsByLocation;
