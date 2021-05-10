import React from 'react';
import { render, cleanup, screen } from '@testing-library/react'
import Roulette from '../src/Roulette.js';
import '@testing-library/jest-dom';

describe('Roulette Overall', () => {

    test("Roulette wheel rendered", () => {
        render(<Roulette />);
        expect(screen.getByTestId("wheel-container")).toBeInTheDocument();
        cleanup();
    })

    test("Roulette selector rendered", () => {
        render(<Roulette />);
        expect(screen.getByAltText("selector")).toBeInTheDocument();
        cleanup();
    })

    test("Roulette location input box rendered", () => {
    render(<Roulette />);
        const locationLabel = screen.getByText("Location");
        // const locationInput = screen.getByPlaceholderText("");
        const locationInput = screen.getByTestId("location-dropdown");
        expect(locationLabel).toBeInTheDocument();
        // expect(locationInput).toBeInTheDocument();
        expect(locationInput).toBeInTheDocument();
    cleanup();
    })

    test("Roulette buttons rendered", () => {
    render(<Roulette />);
        const strButton = screen.getByText("Screw that Review!");
        const experienceButton = screen.getByText("Get my Result");
        expect(strButton).toBeInTheDocument();
        expect(experienceButton).toBeInTheDocument();
    cleanup();
    })

    test("Roulette title image rendered", () => {
    render(<Roulette />);
        const title = screen.getByAltText("roulette");
        expect(title).toBeInTheDocument();
    cleanup();
    });
})
