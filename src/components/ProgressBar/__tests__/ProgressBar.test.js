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

    describe('given a max value and current value', () => {
        it('shows a progress bar of the correct width', () => {
            const progressBar = ReactTestUtils.renderIntoDocument(
                <ProgressBar maxValue="400" currentValue="60" />
            );

            let progressBarProgress = ReactTestUtils.findRenderedDOMComponentWithClass(progressBar, 'percentage');
            
            expect(progressBarProgress.textContent).toEqual('0');
        });
    });
});