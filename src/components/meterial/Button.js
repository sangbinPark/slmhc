import * as React from "react";
import { default as MeterialButton } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledButton = styled(MeterialButton)({
  textTransform: 'none',
});

export default function Button({ children, variant, sx, ...rest }) {
  return (
    <StyledButton
      variant={variant}
      sx={sx}
      disableFocusRipple
      {...rest}
    >
      {children}
    </StyledButton>
  )
}