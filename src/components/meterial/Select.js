import * as React from "react";
import { default as MeterialSelect } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';

const StyledSelect = styled(MeterialSelect)(({ theme }) => ({
  height: '40px',
  "&:hover": {
    "&& fieldset": {
      borderColor: theme.palette.primary.main,
    }
  }
}));

export default function Select({ options, defaultValue, value, onChange, ...rest }) {
  return (
    <StyledSelect
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      autoWidth={false}
      variant="outlined"
      {...rest}
    >
      {options.map(item => (
        <MenuItem key={item.id} value={item.id}>{item.label}</MenuItem>
      ))}
    </StyledSelect>
  );
}