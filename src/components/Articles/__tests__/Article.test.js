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
        actions: {
            lookupAuthor: () => { 
                return {
                    website: 'http://www.author.com',
                    firstName: 'David',
                    lastName: 'Federspiel'
                };
            }
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