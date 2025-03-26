import React from 'react';
import { TextField } from '@mui/material';

const Input = ({ type, value, onChange, placeholder, required }) => {
  return (
    <TextField
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      fullWidth
      margin="normal"
      variant="outlined"
    />
  );
};

export default Input;