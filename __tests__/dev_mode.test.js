/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Server from '../src/server';

describe('Dev mode tests', () => {
  test('URL Defaults to Heroku one', () => {
    expect(Server.getServerUrl()).toMatch('https://hidden-mesa-04199.herokuapp.com/');
  });

  test('Dev mode URL is local host', () => {
    process.env.REACT_APP_DEV_MODE = 1;
    expect(Server.getServerUrl()).toMatch('http://localhost:5000/');
  });
});
