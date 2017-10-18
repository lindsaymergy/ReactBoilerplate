import React from 'react';
import Article from '../Article';

import renderer from 'react-test-renderer';

describe('The Article', () => {
    const props = {
        article: {
            title: 'The Littlest Worm',
            data: '1/1/2011',
            body: 'The littlest worm you ever saw got stuck inside my soda straw.'
        },
        author: {
            'id': '1',
            'firstName': 'David',
            'lastName': 'Federspiel',
            'website': 'https://github.com/dfederspiel' 
        }
    };

    it('renders correctly', () => {
        const tree = renderer.create(
            <Article
                {...props}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});