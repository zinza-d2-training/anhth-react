import { Typography, Box } from '@mui/material';
import { Controller } from 'react-hook-form';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers/';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

interface DateItemType {
  name: string;
  control: any;
  helperText?: any;
  typography: string;
}
export default function DateController({
  name,
  control,
  typography,
  helperText
}: DateItemType) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref, ...field }, fieldState: { error } }) => (
        <>
          <Typography align="left">
            {typography}
            {error ? (
              <Box component="span" sx={{ color: 'red' }}>
                {` `}(*)
              </Box>
            ) : (
              ''
            )}
          </Typography>
          <DatePicker
            slotProps={{
              textField: {
                error: !!error,
                helperText: helperText,
                FormHelperTextProps: {
                  style: {
                    marginLeft: 0,
                    color: 'red'
                  }
                }
              }
            }}
            sx={{ width: '100%', margin: '10px 0' }}
            {...field}
            inputRef={ref}
          />
        </>
      )}
    />
  );
}
