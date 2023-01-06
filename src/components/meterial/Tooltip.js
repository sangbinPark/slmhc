import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

const CustomTooltip = styled(({ className, useClick, handleTooltipClose, open, ...props }) => useClick ? (
  <Tooltip
    PopperProps={{
      disablePortal: true,
    }}
    onClose={handleTooltipClose}
    open={open}
    disableFocusListener
    disableHoverListener
    disableTouchListener
    TransitionComponent={Zoom}
    {...props}
    classes={{ popper: className }} 
  />
) : (
  <Tooltip
    TransitionComponent={Zoom}
    {...props}
    classes={{ popper: className }} 
  />
))(() => ({
  [`& .${tooltipClasses.arrow}`]: {},
  [`& .${tooltipClasses.tooltip}`]: {
    fontSize: 14,
  },
}));

export default CustomTooltip;
