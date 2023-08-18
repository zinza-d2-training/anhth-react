import { Controller, Control, Path, FieldValues } from 'react-hook-form';
import { TextField, Typography, Box } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { ProvinceType } from '../../types/provinceType';

interface SelectorForm {
  value: string | number;
  label: string;
}

interface RHFAutocompleteFieldProps<
  TField extends FieldValues,
  O extends FieldValues = SelectorForm | ProvinceType
> {
  control: Control<TField>;
  name: Path<TField>;
  selectors: O[];
  placeholder?: string;
  helperText?: string | undefined;
  typography?: string;
  required?: boolean;
  size?: 'small' | 'medium';
}

export const SelectorController = <
  TField extends FieldValues,
  O extends FieldValues = SelectorForm | ProvinceType
>(
  props: RHFAutocompleteFieldProps<O, TField>
) => {
  const { control, selectors, name, helperText, typography, required, size } =
    props;
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
                      return value === option.value || value === option.code;
                    }) ?? null
                  : null
              }
              getOptionLabel={(option) => {
                return option?.label || option?.name;
              }}
              onChange={(event: any, newValue: any) => {
                onChange(newValue ? newValue.value || newValue.code : null);
              }}
              options={selectors}
              sx={{ width: '100%', margin: '10px 0' }}
              renderInput={(params) => (
                <TextField
                  required={required}
                  error={!!error}
                  helperText={helperText}
                  inputRef={ref}
                  {...params}
                  size={size}
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
