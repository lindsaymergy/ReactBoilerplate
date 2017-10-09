// since everything is automatically mocked in Jest,
// tell Jest not to mock the component under test.
jest.dontMock('../Button');

// import react and reacts' test utilities
import React from 'react';
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';

// import the component to put under test.
import Button from '../Button';


// describe the component we are testing
describe('the button component', () => {

    // optionally, define common props that can be used across
    // all tests.
    let props = {
        text: 'My Test Button',
        click: () => null
    };

    // assert a truth
    it('renders correctly', () => {
        const tree = renderer.create(
            <Button {...props} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    // describe a scenario
    describe('given a text value', () => {

        // assert a truth
        it('should display a button with the given value', () => {
            const button = ReactTestUtils.renderIntoDocument(
                <Button {...props} />
            );

            let text = ReactTestUtils.findRenderedDOMComponentWithClass(button, 'button');
            expect(text.textContent).toEqual(props.text);
        });
    });

    // describe a scenario
    describe('given no text value', () => {
        it('should display a default text value', () => {
            const button = ReactTestUtils.renderIntoDocument(
                <Button />
            );

            let text = ReactTestUtils.findRenderedDOMComponentWithClass(button, 'button');
            expect(text.textContent).toEqual('Yo! You forgot to add text!');
        });
    });

    // describe a scenario
    describe('given a click handler', () => {

        // assert a truth
        it('should handle the event', () => {
            const button = ReactTestUtils.renderIntoDocument(
                <Button {...props} />
            );
            
            let buttonElement = ReactTestUtils.findRenderedDOMComponentWithClass(button, 'button');
            ReactTestUtils.Simulate.click(buttonElement);
        });
    });


    // describe a scenario
    describe('given no click handler', () => {

        // assert a truth
        it('should handle null gracefully', () => {
            const button = ReactTestUtils.renderIntoDocument(
                <Button text="Button with No Handler" />
            );
            let buttonElement = ReactTestUtils.findRenderedDOMComponentWithClass(button, 'button');
            ReactTestUtils.Simulate.click(buttonElement);
        });
    });
});