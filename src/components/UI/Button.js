import React from 'react';
import { Button as MuiButton } from '@mui/material';

const Button = ({ children, type, onClick }) => {
  return (
    <MuiButton
      type={type}
      variant="contained"
      color="primary"
      fullWidth
      onClick={onClick}
      style={{ marginTop: '1rem' }}
    >
      {children}
    </MuiButton>
  );
};

export default Button;