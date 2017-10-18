import React from 'react';

import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';

// import the component to put under test.
import ProgressBar from '../ProgressBar';

describe('the progress bar component', () => {

    it('renders correctly', () => {
        const tree = renderer.create(
            <ProgressBar maxValue={100} value={75} color="red" />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('will increase the width of the progress for each tick', () => {
        var ProgressBarComponent = ReactTestUtils.renderIntoDocument(<ProgressBar maxValue={100} value={100} />);
        ProgressBarComponent.tick();
        var radius = ProgressBarComponent.getRadius();
        expect(radius).toBe('15px 0 0 15px');

        //ProgressBarComponent.state.currentPercentage = 1;
        //radius = ProgressBarComponent.getRadius();

        //expect(radius).toBe('15px 15px 15px 15px');

        jest.useFakeTimers();
        jest.runOnlyPendingTimers();

        console.log(ProgressBarComponent.getRadius());

    });
});