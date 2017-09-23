import React from 'react';
import ArticleList from '../ArticleList';

import renderer from 'react-test-renderer';

describe('ArticleList', () => {

    const testProps = {
        data: {
            a: { id: 'a' },
            b: { id: 'b' },
            c: { id: 'c' },
        }
    };

    it('renders correctly', () => {

        const tree = renderer.create(
            <ArticleList
                data={testProps.data}
            />
        ).toJSON();
        expect(tree.children.length).toBe(3);
        expect(tree).toMatchSnapshot();
    });
});
