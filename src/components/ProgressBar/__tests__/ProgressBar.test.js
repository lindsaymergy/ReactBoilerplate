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
});