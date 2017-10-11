import React from 'react';
import ArticleList from '../ArticleList';

jest.mock('../Article', () => {
    const article = () => <div />;
    return article;
});

import renderer from 'react-test-renderer';

describe('The ArticleList', () => {

    let props;

    beforeEach(() => {
        props = {
            articles: [
                {
                    'id': '1',
                    'title': 'Article One',
                    'date': '01/01/2018',
                    'authorId': '1',
                    'body': 'This is an article about Ones\'s'
                },
                {
                    'id': '2',
                    'title': 'Article Two',
                    'date': '01/05/2018',
                    'authorId': '1',
                    'body': 'This is an article about Two\'s'
                },
                {
                    'id': '3',
                    'title': 'Article Three',
                    'date': '02/06/2018',
                    'authorId': '1',
                    'body': 'This is an article about Three\'s'
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