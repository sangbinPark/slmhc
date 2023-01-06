import * as React from "react";
import { useState, cloneElement } from 'react';
import { default as MeterialDrawer } from '@mui/material/Drawer';

export default function Drawer({ Button, anchor, children }) {
  const [open, setOpen] = useState(false);
  const toggleDrawer = e => {
    if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
      return;
    }
    setOpen(!open);
  };
  return (
    <>
      {cloneElement(Button, {
        onClick: toggleDrawer,
      })}
      <MeterialDrawer
        anchor={anchor}
        open={open}
        onClose={toggleDrawer}
      >
        {children}
      </MeterialDrawer>
    </>
  );
}
