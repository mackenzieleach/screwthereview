/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from '../src/About';

/* This file implements testing for all UI components in About.js. */

describe('Image Rendering Tests', () => {
  test('Test Logo Renders', () => {
    render(<About />);
    expect(screen.getByAltText('Logo')).toBeInTheDocument();
    cleanup();
  });

  test('Luke Photo Renders', () => {
    render(<About />);
    expect(screen.getByAltText('luke')).toBeInTheDocument();
    cleanup();
  });

  test('Mackenzie Photo Renders', () => {
    render(<About />);
    expect(screen.getByAltText('kenzie')).toBeInTheDocument();
    cleanup();
  });

  test('LuLu Photo Renders', () => {
    render(<About />);
    expect(screen.getByAltText('lulu')).toBeInTheDocument();
    cleanup();
  });

  test('Rachel Photo Renders', () => {
    render(<About />);
    expect(screen.getByAltText('rachel')).toBeInTheDocument();
    cleanup();
  });
});

describe('Text Rendering Tests', () => {
  test('Heading Text Renders', () => {
    render(<About />);
    expect(screen.getByText('About & Our Team')).toBeInTheDocument();
    cleanup();
  });

  test('Page Description Text Renders', () => {
    render(<About />);

    // getByText accepts a RegExp for a paragraph starting with these words
    expect(screen.getByText(/Screw the Review/i)).toBeInTheDocument();
    cleanup();
  });

  test('Application UW Text Renders', () => {
    render(<About />);

    // getByText accepts a RegExp for a paragraph starting with these words
    expect(screen.getByText(/This application was/i)).toBeInTheDocument();
    cleanup();
  });

  test('Luke Name Text Renders', () => {
    render(<About />);
    expect(screen.getByText('Luke LeVasseur')).toBeInTheDocument();
    cleanup();
  });

  test('Luke Description Text Renders', () => {
    render(<About />);
    expect(screen.getByText('Backend Developer')).toBeInTheDocument();
    cleanup();
  });

  test('Mackenzie Name Text Renders', () => {
    render(<About />);
    expect(screen.getByText('Mackenzie Leach')).toBeInTheDocument();
    cleanup();
  });

  test('Mackenzie Description Text Renders', () => {
    render(<About />);
    expect(screen.getByText('Frontend Developer')).toBeInTheDocument();
    cleanup();
  });

  test('LuLu Name Text Renders', () => {
    render(<About />);
    expect(screen.getByText('LuLu Pinczower')).toBeInTheDocument();
    cleanup();
  });

  test('LuLu & Rachel Description Text Renders', () => {
    render(<About />);
    expect(screen.getAllByText('Full-Stack Developer').length).toBeGreaterThanOrEqual(2);
    cleanup();
  });

  test('Rachel Name Text Renders', () => {
    render(<About />);
    expect(screen.getByText('Rachel Ye')).toBeInTheDocument();
    cleanup();
  });
});
