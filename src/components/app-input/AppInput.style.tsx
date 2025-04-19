export const styles = {
  input: {
    width:{
      xs: '90%',
      sm: '100%'
    },
    maxWidth: '640px',
    '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#574142', // Default border color
          },
          '&:hover fieldset': {
            borderColor: '#a96466', // Border color on hover
          },
          '&.Mui-focused fieldset': {
            borderColor: '#a96466', // Border color when focused
          },
        },
        '& .MuiInputLabel-root': {
          color: '#574142', // Label color
        },
        '& .MuiInputLabel-root.Mui-focused': {
          color: '#a96466', // Label color when focused
  }}}
