import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import Home from '../src/Home.js';
import logo from '../src/Images/ScrewtheReviewLogo.png';


// Testing Ideas:
// 1. Logo Renders
// 2. "Welcome to Screw the Review"
// 3. Landing Page Text
// 4. Log in Button
// 5. Log Out Button
// 6. Search Card & Link
// 7. About Card & Link
// 8. Roulette Card & Link
// 9. Contact Card & Modal


test('Test Logo Renders', () => {
    render(<Home/>)
    expect(screen.find("img").prop("src")).toEqual(logo);
    cleanup()
})


