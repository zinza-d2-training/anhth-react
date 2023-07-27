import { TextField, Typography, Box } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';

interface InputType {
  type: string;
  name: string;
  control?: any;
  helperText?: any;
  placeholder?: string;
  typography?: string;
}
export default function InputController({
  type,
  helperText,
  name,
  control,
  placeholder,
  typography
}: InputType) {
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
}
