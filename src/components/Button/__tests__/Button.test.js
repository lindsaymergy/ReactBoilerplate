jest.dontMock('../Button');
import React from 'react';
import Button from '../Button';
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';

describe('the button component', () => {
    let props = {
        text: 'My Test Button',
        click: () => null
    };
    it('renders correctly', () => {
        const tree = renderer.create(
            <Button {...props} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('given a text value', () => {
        it('should display a button with the given value', () => {
            const button = ReactTestUtils.renderIntoDocument(
                <Button {...props} />
            );

            let text = ReactTestUtils.findRenderedDOMComponentWithClass(button, 'button');
            expect(text.textContent).toEqual(props.text);
        });
    });

    describe('given a click handler', () => {
        it('should handle the event', () => {
            const button = ReactTestUtils.renderIntoDocument(
                <Button {...props} />
            );
            
            let buttonElement = ReactTestUtils.findRenderedDOMComponentWithClass(button, 'button');
            ReactTestUtils.Simulate.click(buttonElement);
        });
    });
});