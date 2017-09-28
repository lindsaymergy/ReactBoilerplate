import React from 'react';
import ArticleList from '../ArticleList';
import DataApi from '../../../services/DataApi';

import { data } from '../../../services/__tests__/data.json';

import renderer from 'react-test-renderer';

describe('The ArticleList', () => {
    const api = new DataApi(data);
    const props = {
        articles: api.getArticles(),
        authors: api.getAuthors()
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
