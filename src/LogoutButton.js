/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button type="button" id="auth0-logout" onClick={() => logout({ returnTo: window.location.origin })}> Sign Out </button>
  );
};

export default LogoutButton;
