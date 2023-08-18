import { Typography, Box } from '@mui/material';
import {
  Controller,
  FieldValues,
  Path,
  PathValue,
  UseControllerProps
} from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers/';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

interface DateItemType<FieldsType extends FieldValues>
  extends UseControllerProps<FieldsType> {
  helperText?: string;
  typography: string;
  placeholder?: string;
  size?: 'small' | 'medium';
}
export const DateController = <FieldsType extends FieldValues>({
  name,
  control,
  typography,
  helperText,
  placeholder,
  size
}: DateItemType<FieldsType>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { ref, onChange, ...field },
        fieldState: { error }
      }) => (
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
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              {...field}
              onChange={(value) =>
                onChange(value as PathValue<FieldsType, Path<FieldsType>>)
              }
              slotProps={{
                textField: {
                  size: size,
                  placeholder: placeholder,
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
              inputRef={ref}
            />
          </LocalizationProvider>
        </>
      )}
    />
  );
};
