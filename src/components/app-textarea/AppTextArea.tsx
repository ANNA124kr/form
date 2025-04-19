import { TextField } from '@mui/material';
import React from 'react';
import { styles } from '../app-input/AppInput.style';

interface InputProps {
  label: string,
  id: string,
  rows: number,
  cols: number,
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const AppTextArea: React.FC<InputProps> = ({ label, id, value, rows = 4, ...props }) => {
  return (
    <TextField
      sx={styles.input}
      margin='dense'
      id={id}
      label= {label}
      multiline
      fullWidth
      variant='outlined'
      value={value}
      rows={rows}
      {...props}

    />
  );
};

export default AppTextArea;