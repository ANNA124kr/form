export const styles = {
  container: {
    width: {
      xs: '100%', // Full width on extra-small screens (<600px)
      sm: '90%',  // 90% width on small screens (600px+)
      md: '80%',  // 80% width on medium screens (900px+)
    },
    maxWidth: '1024px',
    margin: '0 auto',
    padding: {
      xs: '16px',  // 16px padding on extra-small screens
      sm: '24px',  // 24px padding on small screens
      md: '32px',  // 32px padding on medium screens
      lg: '40px',  // 40px padding on large screens
    },
  },
  buttonsContainer:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: {xs: 'space-between',sm: 'flex-end', md: 'flex-end'},
    width:{
      xs: '90%',
      sm: '100%'
    },
    maxWidth: '640px',
    marginTop: '10px'
  },
  buttonSubmit: {
    backgroundColor: '#574142', 
    color: 'white', 
    marginLeft: '10px',
    borderRadius: '5px', 
    padding: '12px 24px', 
    '&:hover': {
    backgroundColor: '#a96466',
    },
  },
  buttonReset: {
    color: '#574142', 
    borderRadius: '5px', 
    padding: '14px 28px',
    borderColor: '#574142',
    '&:hover': {
      borderColor: '#a96466',
      color:'#a96466',
      backgroundColor: '#fff6f4'
    },
  }
}