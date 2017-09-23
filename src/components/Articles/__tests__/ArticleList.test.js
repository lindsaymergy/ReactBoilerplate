import React from 'react';
import ArticleList from '../ArticleList';
import renderer from 'react-test-renderer';
import { data } from './data.json';

describe('The ArticleList', () => {

    it('renders correctly', () => {

        const tree = renderer.create(
            <ArticleList
                data={data} // WHY DOESN'T the spread work!?  {...data}
            />
        ).toJSON();

        expect(tree.children.length).toBe(3);
        expect(tree).toMatchSnapshot();
    });
});
