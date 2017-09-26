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
        const tree = renderer.create(
            <ArticleList
                {...props} // WHY DOESN'T the spread work!?  {...data}
            />
        ).toJSON();

        expect(tree.children.length).toBe(3);
        expect(tree).toMatchSnapshot();
    });
});
