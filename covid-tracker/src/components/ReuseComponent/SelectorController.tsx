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
  helperText: string | undefined;
  typography: string;
}

export const SelectorController = <
  TField extends FieldValues,
  O extends FieldValues = Gender | Province
>(
  props: RHFAutocompleteFieldProps<O, TField>
) => {
  const { control, selectors, name, helperText, typography } = props;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const { onChange, value, ref } = field;
        return (
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
                onChange(newValue ? newValue.id || newValue.code : null);
              }}
              options={selectors}
              sx={{ width: '100%', margin: '10px 0' }}
              renderInput={(params) => (
                <TextField
                  required
                  error={!!error}
                  helperText={helperText}
                  inputRef={ref}
                  {...params}
                  FormHelperTextProps={{
                    style: {
                      marginLeft: 0,
                      color: 'red'
                    }
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
