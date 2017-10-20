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

});