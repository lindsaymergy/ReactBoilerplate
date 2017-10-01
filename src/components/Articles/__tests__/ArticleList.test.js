import React from 'react';
import ArticleList from '../ArticleList';


import renderer from 'react-test-renderer';
describe('The ArticleList', () => {
    const props = {
        articles: {},
        authors: {}
    };

    it('renders correctly', () => {

        global.fetch = jest.fn(() => new Promise((resolve) => resolve({})));

        const tree = renderer.create(
            <ArticleList
                {...props}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
