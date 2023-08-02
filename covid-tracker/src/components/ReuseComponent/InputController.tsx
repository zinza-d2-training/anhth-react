import { TextField, Typography, Box } from '@mui/material';
import React from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';


interface InputType<FieldsType extends FieldValues> {
  type: string;
  name: Path<FieldsType>;
  control?: Control<FieldsType>;
  helperText?: string;
  placeholder?: string;
  typography?: string;
}
export const InputController = <FieldsType extends FieldValues>({
  type,
  helperText,
  name,
  control,
  placeholder,
  typography
}: InputType<FieldsType>) => {
  return (
    <Controller
      render={({ field: { ...field }, fieldState: { error } }) => (
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
          <TextField
            {...field}
            margin="none"
            type={type}
            sx={{ padding: '10px 0' }}
            fullWidth
            required
            helperText={helperText}
            FormHelperTextProps={{
              style: {
                marginLeft: 0,
                color: 'red'
              }
            }}
            placeholder={placeholder}
          />
        </>
      )}
      name={name}
      control={control}
    />
  );
};
