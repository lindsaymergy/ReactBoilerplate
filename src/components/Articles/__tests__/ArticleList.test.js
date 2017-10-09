import React from 'react';
import ArticleList from '../ArticleList';


import renderer from 'react-test-renderer';

describe('The ArticleList', () => {
    const props = {
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
        ],
        authors: [
            {
                'id': '1',
                'firstName': 'David',
                'lastName': 'Federspiel',
                'website': 'https://github.com/dfederspiel' 
            }
        ]
    };

    xit('renders correctly', () => {

        //global.fetch = jest.fn(() => new Promise((resolve) => resolve({})));
        // jest.mock('../Article', () => {
        //     return {
        //         website: 'asljdhasljdh'
        //     };
        // });

        // jest.mock('../Article', () => ({ 
        //     author: {
        //         'id': '1',
        //         'firstName': 'David',
        //         'lastName': 'Federspiel',
        //         'website': 'https://github.com/dfederspiel' 
        //     } 
        // }));
        const tree = renderer.create(
            <ArticleList
                {...props}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
