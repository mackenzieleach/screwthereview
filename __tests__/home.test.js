import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Home from '../src/Home.js';

/* This file implements testing for all UI components in Home.js. 
screen.findByAltText():
screen.
screen. 
*/

// Testing Ideas:
// 6. Search Card & Link
// 7. About Card & Link
// 8. Roulette Card & Link
// 9. Contact Card & Modal

describe('Image Rendering Tests', () => {
    test('Test Logo Renders', () => {
        render(<Home />);
        expect(screen.findByAltText("Logo"));
        cleanup();
    })

    test('Search Icon Renders', () => {
        render(<Home />);
        expect(screen.findByAltText("search-icon"));
        cleanup();
    })

    test('Roulette Icon Renders', () => {
        render(<Home />);
        expect(screen.findByAltText("wheel-icon"));
        cleanup();
    })

    test('About Us Icon Renders', () => {
        render(<Home />);
        expect(screen.findByAltText("about-icon"));
        cleanup();
    })

    test('Contact Icon Renders', () => {
        render(<Home />);
        expect(screen.findByAltText("contact-icon"));
        cleanup();
    })
})


describe('Text Rendering Tests', () => {
    test('Heading Text Renders', () => {
        render(<Home />)
        expect(screen.getByText('Welcome to Screw the Review!')).toBeInTheDocument();
        cleanup()
    })

    test('Website About Text Renders', () => {
        render(<Home />)

        // getByText accepts a RegExp for a paragraph starting with these words
        expect(screen.getByText(/Don\'t know what/i)).toBeInTheDocument();
        cleanup()
    })

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
        expect(screen.getAllByRole('button').length).toBe(3);
        cleanup()
    })
})


describe('Link Functionality Tests', () => {
    test('Search, Roulette & About Links', () => {
        render(<Home />)
        expect(screen.getAllByRole('link').length).toBe(3);
        cleanup()
    })
})


describe('Contact Modal Window', () => {

})
