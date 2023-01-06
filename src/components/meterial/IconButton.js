import * as React from "react";
import { default as MeterialIconButton } from '@mui/material/IconButton';
import Icon from './Icon';
import { styled } from '@mui/material/styles';

const StyledIconButton = styled(MeterialIconButton)({
  padding: '10px',
});

export default function IconButton({ name, size, color, ...rest }) {
  return (
    <StyledIconButton disableFocusRipple {...rest}>
      {name && <Icon name={name} size={size} color={color} />}
    </StyledIconButton>
  )
}