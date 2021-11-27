import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { DeliveryDining } from '@mui/icons-material';

const Nav = ({ setAuthType, authenticated, setAuthenticated }) => {
  const handleAuthenticate = (type) => {
    setAuthType(type);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
              onClick={() => {
                handleAuthenticate('');
              }}
            >
              <DeliveryDining />
            </IconButton>
          </Typography>
          {!authenticated ? (
            <Button color='inherit' onClick={() => handleAuthenticate('login')}>
              Login
            </Button>
          ) : (
            <Button
              color='inherit'
              onClick={() => {
                handleAuthenticate('');
                setAuthenticated(false);
              }}
            >
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
