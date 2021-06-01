/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import Result from '../src/Result';
import '@testing-library/jest-dom';

require('jest-fetch-mock').enableMocks();

beforeEach(() => {
  fetchMock.mockIf('http://hidden-mesa-04199.herokuapp.com?location=seattle', (req) => {
    if (req.url.endsWith('/path1')) {
      return 'some response body';
    } if (req.url.endsWith('/path2')) {
      return {
        body: 'another response body',
        headers: {
          'X-Some-Response-Header': 'Some header value',
        },
      };
    }
    return {
      status: 404,
      body: 'Not Found',
    };
  });
  const resultComponent = shallow(<Result />);
  resultComponent.setState({ loading: false });
});

describe.skip('Result Overall', () => {
  test('Result image rendered', () => {
    render(<Result />);
    expect(screen.getByAltText('result')).toBeInTheDocument();
    cleanup();
  });

  test.skip('Result name rendered', () => {
    render(<Result />);
    expect(screen.getByTestId('result-name')).toBeInTheDocument();
    cleanup();
  });

  test.skip('Result map rendered', () => {
    render(<Result />);
    expect(screen.getByAltText('map')).toBeInTheDocument();
    cleanup();
  });

  test.skip('Result hours table rendered', () => {
    render(<Result />);
    const hoursLabel = screen.getByText('Hours');
    const hoursTable = screen.getByTestId('result-hours-table');
    expect(hoursLabel).toBeInTheDocument();
    expect(hoursTable).toBeInTheDocument();
    cleanup();
  });

  test.skip('Result info table rendered', () => {
    render(<Result />);
    const infoTable = screen.getByTestId('result-info-table');
    const infoTableItems = screen.getAllByTestId('info-item');
    expect(infoTable).toBeInTheDocument();
    expect(infoTableItems.length).toBeGreaterThanOrEqual(4);
    cleanup();
  });

  test.skip('Result link rendered', () => {
    render(<Result />);
    expect(screen.getByText('Website'));
    cleanup();
  });
});
