import React from 'react';
import { render, cleanup, screen } from '@testing-library/react'
import Result from '../src/Result.js';
import '@testing-library/jest-dom';
require('jest-fetch-mock').enableMocks()

beforeEach(() => { // if you have an existing `beforeEach` just add the following lines to it
    fetchMock.mockIf('http://hidden-mesa-04199.herokuapp.com?location=seattle', req => {
        if (req.url.endsWith("/path1")) {
          return "some response body"
        } else if (req.url.endsWith("/path2")) {
          return {
            body: "another response body",
            headers: {
              "X-Some-Response-Header": "Some header value"
            } 
          }
        } else {
          return {
            status: 404,
            body: "Not Found"
          }
        }
    })
  })

describe('Result Overall', () => {

    test("Result image rendered", () => {
        render(<Result />);
        expect(screen.getByAltText("result")).toBeInTheDocument();
        cleanup();
    })

    test("Result name rendered", () => {
        render(<Result />);
        expect(screen.getByTestId("result-name")).toBeInTheDocument();
        cleanup();
    })

    test("Result map rendered", () => {
        render(<Result />);
        expect(screen.getByAltText("map")).toBeInTheDocument();
    cleanup();
    })

    test("Result hours table rendered", () => {
    render(<Result />);
        const hoursLabel = screen.getByText("Hours");
        const hoursTable = screen.getByTestId("result-hours-table");
        const hoursTableItems = screen.getAllByTestId("ht-item");
        expect(hoursLabel).toBeInTheDocument();
        expect(hoursTable).toBeInTheDocument();
        expect(hoursTableItems.length).toBeGreaterThanOrEqual(7);
    cleanup();
    })

    test("Result info table rendered", () => {
        render(<Result />);
        const infoTable = screen.getByTestId("result-info-table");
        const infoTableItems = screen.getAllByTestId("info-item");
        expect(infoTable).toBeInTheDocument();
        expect(infoTableItems.length).toBeGreaterThanOrEqual(4);
        cleanup();
        })
    

    test("Result link rendered", () => {
        render(<Result />);
        expect(screen.getAllByRole("link").length).toBeGreaterThan(0);
    cleanup();
    })
    

})
