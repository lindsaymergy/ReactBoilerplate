import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import renderer from 'react-test-renderer';

import Salutation from '../Salutation';

describe('the salutation component', () => {
    it('renders correctly', () => {
        const tree = renderer.create(
            <Salutation />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('given no greetings', () => {
        it('displays the default greeting', () => {
            let SalutationComponent = ReactTestUtils.renderIntoDocument(<Salutation />);
            let h1 = ReactTestUtils.findRenderedDOMComponentWithTag(SalutationComponent, 'h1');
            expect(h1.textContent).toBe('hello world');
        });
    });

    describe('given a word', () => {
        it('displays that word instead of the default greeting', () => {
            let SalutationComponent = ReactTestUtils.renderIntoDocument(<Salutation words="heyo"/>);
            let h1 = ReactTestUtils.findRenderedDOMComponentWithTag(SalutationComponent, 'h1');
            expect(h1.textContent).toBe('heyo');
        });
    });

    describe('given a comma-seperated list of greetings', () => {
        it('displays one greeting from list', () => {
            let SalutationComponent = ReactTestUtils.renderIntoDocument(<Salutation words="heyo, heyo"/>);
            let h1 = ReactTestUtils.findRenderedDOMComponentWithTag(SalutationComponent, 'h1');
            expect(h1.textContent).toBe('heyo');
        });
    });

});