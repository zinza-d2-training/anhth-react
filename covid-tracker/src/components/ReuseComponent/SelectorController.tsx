import { Controller, Control, Path, FieldValues } from 'react-hook-form';
import { TextField, Typography, Box } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { Province } from '../../types/provinceType';

interface Gender {
  id: string | number;
  label: string;
}

interface RHFAutocompleteFieldProps<
  TField extends FieldValues,
  O extends FieldValues = Gender | Province
> {
  control: Control<TField>;
  name: Path<TField>;
  selectors: O[];
  placeholder?: string;
  helperText?: string | undefined;
  typography?: string;
  size?: 'small';
  required?: boolean;
}

export const SelectorController = <
  TField extends FieldValues,
  O extends FieldValues = Gender | Province
>(
  props: RHFAutocompleteFieldProps<O, TField>
) => {
  const {
    control,
    selectors,
    name,
    helperText,
    typography,
    placeholder,
    size,
    required
  } = props;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const { onChange, value, ref } = field;
        return (
          <>
            {required ? (
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
            ) : (
              <></>
            )}

            <Autocomplete
              value={
                value
                  ? selectors.find((option) => {
                      return value === option.id || value === option.code;
                    }) ?? null
                  : null
              }
              getOptionLabel={(option) => {
                return option?.label || option?.name;
              }}
              onChange={(event: any, newValue: any) => {
                onChange(newValue ? newValue.id || newValue.code : '');
              }}
              options={selectors}
              sx={{ width: '100%', margin: '10px 0' }}
              renderInput={(params) => (
                <TextField
                  required={required}
                  {...params}
                  placeholder={placeholder}
                  error={!!error}
                  inputRef={ref}
                  size={size}
                  helperText={helperText ? true : null}
                  FormHelperTextProps={{
                    style:
                      helperText === ''
                        ? { marginLeft: 0, color: 'red' }
                        : { marginLeft: 0, color: 'black' }
                  }}
                />
              )}
            />
          </>
        );
      }}
    />
  );
};
