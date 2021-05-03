import React from 'react';
import renderer from 'react-test-renderer';
import { render, cleanup, screen } from '@testing-library/react'
import Navigation from '../src/Navigation.js';


describe('Nav Bar Component', () => {
    test.skip('Navigation bar matches snapshot dom', () => {
        
        // using react-test-renderer
        const component = renderer.create(
            <Navigation/>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
  });

  test("Nav bar contains a button + 5 list entries", () => {
        // using react testing lib
        render(<Navigation/>);
        expect(screen.getByRole('button'));
        expect(screen.getAllByRole('listitem').length).toBeGreaterThanOrEqual(4);
        cleanup();
  });
})