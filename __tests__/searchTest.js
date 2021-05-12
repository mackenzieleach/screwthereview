import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Search from '../src/Search.js';

/* This file implements testing for all UI components in Search.js. */

describe('Image Rendering Tests', () => {
    test('Test Search Logo Renders', () => {
        render(<Search />);
        expect(screen.getByAltText("Logo")).toBeInTheDocument();
        cleanup();
    })

    test('Cafe Pic Renders', () => {
        render(<Search />);
        expect(screen.getByAltText("cafe")).toBeInTheDocument();
        cleanup();
    })

    test('Hike Pic Renders', () => {
        render(<Search />);
        expect(screen.getByAltText("hike")).toBeInTheDocument();
        cleanup();
    })

    test('People Pic Renders', () => {
        render(<Search/>);
        expect(screen.getByAltText("people")).toBeInTheDocument();
        cleanup();
    })

    test('Pasta Pic Renders', () => {
        render(<Search />);
        expect(screen.getByAltText("pasta")).toBeInTheDocument();
        cleanup();
    })

    test('Coffee Pic Renders', () => {
        render(<Search />);
        expect(screen.getByAltText("coffee")).toBeInTheDocument();
        cleanup();
    })

    test('Musesum Pic Renders', () => {
        render(<Search />);
        expect(screen.getByAltText("museum")).toBeInTheDocument();
        cleanup();
    })
})

describe('Button Rendering Tests', () => {
    test('Distance Buttons', () => {
        render(<Search/>);
        expect(screen.getAllByRole('distanceButton').count).toBeGreaterThanOrEqual(4);
        cleanup();
    })
    test('Price Buttons', () => {
        render(<Search/>);
        expect(screen.getAllByRole('dollarButton').count).toBeGreaterThanOrEqual(4);
        cleanup();
    })
    test('Screw the Review Button', () => {
        render(<Search/>);
        expect(screen.getAllByRole('str-Button').count).toBeGreaterThanOrEqual(1);
        cleanup();
    })
    test('Location options renders', () => {
        render(<Search/>);
        expect(screen.getAllByRole('option').count).toBeGreaterThanOrEqual(1);
        cleanup();
    })
})

describe('Text Rendering Tests', () => {
    test('Location Text Renders', () => {
        render(<Search/>);
        expect(screen.getByText('Location')).toBeInTheDocument();
        cleanup();
    })

    test('Price Text Renders', () => {
        render(<Search/>);
        expect(screen.getByText('Price')).toBeInTheDocument();
        expect(screen.getByText('$')).toBeInTheDocument();
        expect(screen.getByText('$$')).toBeInTheDocument();
        expect(screen.getByText('$$$')).toBeInTheDocument();
        expect(screen.getByText('$$$$')).toBeInTheDocument();
        cleanup();
    })

    test('Distance Text Renders', () => {
        render(<Search />);
        expect(screen.getByText('Distance')).toBeInTheDocument();
        cleanup();
    })

    test('Screw that review text renders', () => {
        render(<Search/>);
        expect(screen.getByText('Screw that Review!')).toBeInTheDocument();
        cleanup();
    })

    test('Placeholder Keyword Text Renders', () => {
        render(<Search/>);
        expect(screen.getByPlaceholderText("Type a keyword ... (hike, Chinese, etc.)")).toBeInTheDocument();
        cleanup();
    })
})
