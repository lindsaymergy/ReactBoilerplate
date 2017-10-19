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

    // it('will change the width of the control with each tick', () => {
    //     var ProgressBarComponent = ReactTestUtils.renderIntoDocument(<ProgressBar maxValue={100} value={10} />);
    //     ProgressBarComponent.tick();
    //     ProgressBarComponent.state.newPercentage = 1;
    //     ProgressBarComponent.tick();
    //     ProgressBarComponent.state.newPercentage = -1;
    //     ProgressBarComponent.tick();
    //     ProgressBarComponent.state.newPercentage = 10;
    //     ProgressBarComponent.tick();
    // });

    it('will set a radius of 15px for just the TL & BL of the bar if current percentage is less than 1', () => {
        var ProgressBarComponent = ReactTestUtils.renderIntoDocument(<ProgressBar maxValue={100} value={50} />);
        var radius = ProgressBarComponent.getRadius();
        expect(radius).toBe('15px 0 0 15px');
    });

    it('will set a radius of 15px for all corners of the bar if current percentage is equal to or greater than 1', () => {
        var ProgressBarComponent = ReactTestUtils.renderIntoDocument(<ProgressBar maxValue={100} value={100} />);
        var radius = ProgressBarComponent.getRadius();
        expect(radius).toBe('15px 15px 15px 15px');
    });
});