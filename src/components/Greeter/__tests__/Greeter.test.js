import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import renderer from 'react-test-renderer';

// import the component to put under test.
import Greeter from '../Greeter';

describe('the progress bar component', () => {

    let GreeterComponent;
    beforeEach(() => {
        GreeterComponent = ReactTestUtils.renderIntoDocument(<Greeter />);
    });

    it('renders correctly', () => {
        const tree = renderer.create(
            <Greeter />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('will emphatically begin a sentence based on the number of times it has been required to say hello', () => {
        expect(GreeterComponent.getEmphaticPre()).toBe('Hello, ');
        GreeterComponent.state.currentNumber = 5;
        expect(GreeterComponent.getEmphaticPre()).toBe('Hey, ');
        GreeterComponent.state.currentNumber = 10;
        expect(GreeterComponent.getEmphaticPre()).toBe('Dang it!, ');
    });

    it('will emphatically end a sentence based on the number of times it has been required to say hello', () => {
        expect(GreeterComponent.getEmphaticPost()).toBe('.');
        GreeterComponent.state.currentNumber = 5;
        expect(GreeterComponent.getEmphaticPost()).toBe('!');
        GreeterComponent.state.currentNumber = 10;
        expect(GreeterComponent.getEmphaticPost()).toBe('!!!!!');
    });

    it('will increment the count when the button is clicked', () => {
        expect(GreeterComponent.state.currentNumber).toBe(0);
        GreeterComponent.handleClick();
        expect(GreeterComponent.state.currentNumber).toBe(1);
    });

});