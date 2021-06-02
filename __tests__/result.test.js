/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
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
});

describe('Result Overall', () => {
  test('Result image rendered', () => {
    const result = shallow(<Result />)
    result.setState({ loading: false });
    expect(result.find("#result-image").length).toBeGreaterThanOrEqual(1);
    cleanup();
  });

  test('Result name rendered', () => {
    const result = shallow(<Result />)
    result.setState({ loading: false });
    expect(result.find('#result-name').length).toBeGreaterThanOrEqual(1);
    cleanup();
  });

  test('Result map rendered', () => {
    const result = shallow(<Result />)
    result.setState({ loading: false });
    expect(result.find('#map-image').length).toBeGreaterThanOrEqual(1);
    cleanup();
  });

  test('Result hours table rendered', () => {
    const result = shallow(<Result />)
    result.setState({ loading: false });
    expect(result.find('#result-hours-table').length).toBeGreaterThanOrEqual(1);
    cleanup();
  });

  test('Result info table rendered', () => {
    const result = shallow(<Result />)
    result.setState({ loading: false });
    expect(result.find('#result-info-table').length).toBeGreaterThanOrEqual(1);
    cleanup();
  });

  test('Result link rendered', () => {
    const result = shallow(<Result />)
    result.setState({ loading: false });
    expect(result.find('#link').length).toBeGreaterThanOrEqual(1);
    cleanup();
  });
});
