/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import Navigation from '../src/Navigation';
import '@testing-library/jest-dom';

/* This file implements testing for all UI components in Navigation.js. */

describe('Nav Bar Overall', () => {
  test('Nav Bar Contains Logo', () => {
    render(<Navigation />);
    expect(screen.getByAltText('logo')).toBeInTheDocument();
  });

  test('Renders 4 List Items', () => {
    render(<Navigation />);
    expect(screen.getAllByRole('listitem').length).toBe(4);
    cleanup();
  });
});

describe('Nav Bar Link Text', () => {
  test('Home Text Renders', () => {
    render(<Navigation />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    cleanup();
  });

  test('Search Text Renders', () => {
    render(<Navigation />);
    expect(screen.getByText('Search')).toBeInTheDocument();
    cleanup();
  });

  test('Roulette Text Renders', () => {
    render(<Navigation />);
    expect(screen.getByText('Roulette')).toBeInTheDocument();
    cleanup();
  });

  test('About Text Renders', () => {
    render(<Navigation />);
    expect(screen.getByText('About')).toBeInTheDocument();
    cleanup();
  });
});
