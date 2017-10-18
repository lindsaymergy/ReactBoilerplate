import React from 'react';
import ArticleList from '../ArticleList';

import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';

jest.mock('../Article', () => {
    const article = (props) => <div data-props={props} />;
    return article;
});

describe('The ArticleList', () => {

    let props;

    beforeEach(() => {
        props = {
            articles: [
                { id: 1 },{ id: 2 },{ id: 3 }
            ],
            authors: [
                {
                    id: 1,
                    website: 'http://www.author.com',
                    firstName: 'David',
                    lastName: 'Federspiel'
                }
            ]
        };
    });

    it('renders correctly', () => {
        const tree = renderer.create(
            <ArticleList
                {...props}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});