import React from 'react';
import Login from './Login/Login';

const Auth = ({ authType, setAuthType, setAuthenticated }) => {
  return (
    authType === 'login' && (
      <Login setAuthType={setAuthType} setAuthenticated={setAuthenticated} />
    )
  );
};

export default Auth;
