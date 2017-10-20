import React from 'react';

import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';

// import the component to put under test.
import Counter from '../Counter';

var CounterComponent;
jest.useFakeTimers();

describe('the counter', () => {

    beforeEach(() => {
        CounterComponent = ReactTestUtils.renderIntoDocument(<Counter />);
    });

    it('renders correctly', () => {
        const tree = renderer.create(
            <Counter />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    // Using the beforeEach above, interact with the components' functions.
    it('increments the counter for each tick', () => {
        CounterComponent.tick();
        expect(CounterComponent.state.counter).toBe(1);
        CounterComponent.tick();
        expect(CounterComponent.state.counter).toBe(2);
        CounterComponent.tick();
        expect(CounterComponent.state.counter).toBe(3);
        CounterComponent.tick();
        CounterComponent.tick();
        expect(CounterComponent.state.counter).toBe(5);
    });

    it('calls the tick function each second', () => {

        // This is important, because other tests will impact values.  Especially if using a beforeEach.
        jest.resetAllMocks();

        // To ensure the above worked, this expectation should pass.
        expect(setTimeout.mock.calls.length).toBe(0);

        CounterComponent = ReactTestUtils.renderIntoDocument(<Counter />);
        CounterComponent.tick = jest.fn();

        expect(setTimeout.mock.calls.length).toBe(1);
        expect(setTimeout.mock.calls[0][1]).toBe(1000);

        // tick 5 times
        CounterComponent.tick();
        CounterComponent.tick();
        CounterComponent.tick();
        CounterComponent.tick();
        CounterComponent.tick();        
        
        // tick() should have been called 5 times.
        expect(CounterComponent.tick).toHaveBeenCalledTimes(5);

        // how do you test an effing timer? :(
    });
});