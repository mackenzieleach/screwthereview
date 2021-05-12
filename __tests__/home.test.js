import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../src/Home.js';

/* This file implements testing for all UI components in Home.js. */

describe('Image Rendering Tests', () => {
    test('Test Logo Renders', () => {
        render(<Home />);
        expect(screen.getByAltText("Logo")).toBeInTheDocument();
        cleanup();
    })

    test('Search Icon Renders', () => {
        render(<Home />);
        expect(screen.getByAltText("search-icon")).toBeInTheDocument();
        cleanup();
    })

    test('Roulette Icon Renders', () => {
        render(<Home />);
        expect(screen.getByAltText("wheel-icon")).toBeInTheDocument();
        cleanup();
    })

    test('About Us Icon Renders', () => {
        render(<Home />);
        expect(screen.getByAltText("about-icon")).toBeInTheDocument();
        cleanup();
    })

    test('Contact Icon Renders', () => {
        render(<Home />);
        expect(screen.getByAltText("contact-icon")).toBeInTheDocument();
        cleanup();
    })
})

describe('Text Rendering Tests', () => {
    test('Heading Text Renders', () => {
        render(<Home />)
        expect(screen.getByText('Welcome to')).toBeInTheDocument();
        cleanup()
    })

/* Since Linting, this is going to require a function to do the text matching */
/*     test('Website About Text Renders', () => {
        render(<Home />)

        expect(screen.getByText('Don\'t know what')).toBeInTheDocument();
        cleanup()
    }) */

    test('Click Tiles Text Renders', () => {
        render(<Home />)

        // getByText accepts a RegExp for a paragraph starting with these words
        expect(screen.getByText(/Click the tiles/i)).toBeInTheDocument();
        cleanup()
    })

    test('Log In Text Renders', () => {
        render(<Home />)
        expect(screen.getByText('Log In')).toBeInTheDocument();
        cleanup()
    })

    test('Log Out Text Renders', () => {
        render(<Home />)
        expect(screen.getByText("Log Out")).toBeInTheDocument();
        cleanup()
    })

    test('Search Link Text Renders', () => {
        render(<Home />)
        expect(screen.getByText("Search")).toBeInTheDocument();
        cleanup()
    })

    test('Roulette Link Text Renders', () => {
        render(<Home />)
        expect(screen.getByText("Roulette")).toBeInTheDocument();
        cleanup()
    })

    test('Search Link Text Renders', () => {
        render(<Home />)
        expect(screen.getByText("About Us")).toBeInTheDocument();
        cleanup()
    })

    test('Search Link Text Renders', () => {
        render(<Home />)
        expect(screen.getByText("Contact")).toBeInTheDocument();
        cleanup()
    })
})


describe('Button Rendering Tests', () => {
    test('Auth0 & Contact Buttons', () => {
        render(<Home />)
        expect(screen.getAllByRole('button').length).toBeGreaterThanOrEqual(3);
        cleanup()
    })
})

describe('Link Functionality Tests', () => {
    test('Search, Roulette & About Links', () => {
        render(<Home />)
        expect(screen.getAllByRole('link').length).toBeGreaterThanOrEqual(3);
        cleanup()
    })
})
