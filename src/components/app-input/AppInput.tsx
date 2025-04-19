import { TextField } from '@mui/material';
import React from 'react';
import { styles } from './AppInput.style';

interface InputProps {
  label: string,
  id: string
  name: string,
  type: string,
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string | boolean;
}

const AppInput: React.FC<InputProps> = ({ label, id, name, type,value, error, helperText, ...props }) => {
  return (
    <TextField
      sx={styles.input}
      margin='dense'
      color='primary'
      variant='outlined'
      fullWidth
      id={id}
      label= {label}
      name={name}
      type={type}
      value={value}
      error = {error}
      helperText = {helperText}
      {...props}
    />
  );
};

export default AppInput;