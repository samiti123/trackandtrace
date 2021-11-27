import React, { useState } from 'react';

const Login = ({ setAuthType, setAuthenticated }) => {
  const authDetails = {
    email: 'test@email.com',
    password: 'pass123',
  };

  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleSubmit = (e) => {
    if (
      authDetails.email === loginDetails.email &&
      authDetails.password === loginDetails.password
    ) {
      setAuthenticated(true);
      setAuthType('');
      setErrorMessage('');
    } else {
      setErrorMessage('Login failed.Please check credentials.');
    }
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Login
        </Typography>
        <Box
          component='form'
          onSubmit={handleSubmit}
          noValidate
          sx={{
            mt: 1,
          }}
        >
          <TextField
            margin='normal'
            label='Email Address'
            required
            fullWidth
            autoFocus
            onChange={(e) =>
              setLoginDetails({
                ...loginDetails,
                email: e.target.value,
              })
            }
          />
          <TextField
            margin='normal'
            label='Password'
            type='password'
            required
            fullWidth
            onChange={() =>
              setLoginDetails({ ...loginDetails, password: e.target.value })
            }
          />
          <Button
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
          >
            Login
          </Button>
        </Box>
        {errorMessage && (
          <Typography variant='subtitle1' color='red'>
            {errorMessage}
          </Typography>
        )}
      </Box>
    </Container>
  );
};
export default Login;
