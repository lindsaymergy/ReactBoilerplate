import React from 'react';
import ArticleList from '../ArticleList';

const json = {
    'articles': [
        {
            'id': '1',
            'title': 'Article One',
            'date': '01/01/2018',
            'authorId': '2',
            'body': 'This is an article about Ones\'s'
        },
    ],
    'authors': [
        {
            'id': '1',
            'firstName': 'David',
            'lastName': 'Federspiel',
            'website': 'https://github.com/dfederspiel' 
        },
    ]
};

import renderer from 'react-test-renderer';
describe('The ArticleList', () => {
    const props = {
        articles: json.articles,
        authors: json.authors
    };

    it.skip('renders correctly', () => {

        global.fetch = jest.fn(() => new Promise((resolve) => resolve({})));

        const tree = renderer.create(
            <ArticleList
                {...props}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
