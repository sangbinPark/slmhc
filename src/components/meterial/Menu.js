import React, { useState } from 'react';
import { default as MeterialMenu } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import Language from '../Language/Language';

const StyledMenu = styled(MeterialMenu)(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 0,
    marginTop: 1,
    minWidth: 180,
    boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '0',
      borderBottom: '2px solid #364A9C',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      // '&.Mui-selected': {
      //   backgroundColor: theme.palette.primary.main,
      //   color: '#fff',
      // },
      '&:active': {
        backgroundColor: theme.palette.primary.main,
        color: '#fff',
      },
    },
  },
}));

export default function Menu({
  id, Button, menus, onClick, value,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = e => { setAnchorEl(e.currentTarget); };
  const handleClose = () => { setAnchorEl(null); };
  const handleMenuItemClick = id => () => {
    onClick(id);
    setAnchorEl(null);
  };
  return (
    <>
      {React.cloneElement(Button, {
        id: `${id}-menu-button`,
        'aria-controls': open ? `${id}-menu` : undefined,
        'aria-haspopup': 'true',
        'aria-expanded': open ? 'true' : undefined,
        onClick: handleClick,
      })}
      <StyledMenu
        id={`${id}-menu`}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': `${id}-menu-button`,
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        {menus.map(item => (
          <MenuItem
            key={item.id}
            selected={item.id === value}
            onClick={handleMenuItemClick(item.id)}
          >
            <Language id={item.label} />
          </MenuItem>
        ))}
      </StyledMenu>
    </>
  );
}
