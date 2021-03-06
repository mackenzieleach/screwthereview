/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button type="button" id="auth0-login" onClick={() => loginWithRedirect()}>Sign In</button>;
};

export default LoginButton;
