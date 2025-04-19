import React from 'react';
import { Box } from '@mui/material';
import FormikForm from './components/form-formilk-yup/FormikForm';
import { styles } from './App.style';

const App: React.FC = () => {
  return (
    <Box
      maxWidth="md" 
      sx={styles.container}
    >
      <FormikForm/>
    </Box>
  );
};

export default App;