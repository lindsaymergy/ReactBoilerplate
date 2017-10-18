import React from 'react';

import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';

// import the component to put under test.
import NameTag from '../NameTag';

describe('the nametag component', () => {

    it('renders correctly', () => {
        const tree = renderer.create(
            <NameTag name="David" />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});