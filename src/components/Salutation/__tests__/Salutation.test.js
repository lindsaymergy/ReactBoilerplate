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

    describe('given no words', () => {
        it('displays a default salutation', () => {
            let SalutationComponent = ReactTestUtils.renderIntoDocument(<Salutation />);
            let h1 = ReactTestUtils.findRenderedDOMComponentWithTag(SalutationComponent, 'h1');
            expect(h1.textContent).toBe('Salutations!');
        });
    });

    describe('given a word', ()=> {
        it('displays that word instead of the default', () => {
            let SalutationComponent = ReactTestUtils.renderIntoDocument(<Salutation words="Hello!" />);
            let h1 = ReactTestUtils.findRenderedDOMComponentWithTag(SalutationComponent, 'h1');
            expect(h1.textContent).toBe('Hello!');
        });
    });

    describe('given a comma separated list of values', () => {
        it('displays one word from the list', () => {
            let SalutationComponent = ReactTestUtils.renderIntoDocument(<Salutation words="Hello!, Hello!" />);
            let h1 = ReactTestUtils.findRenderedDOMComponentWithTag(SalutationComponent, 'h1');
            expect(h1.textContent).toBe('Hello!');
        });
    });
});