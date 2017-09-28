jest.unmock('../Button');
import React from 'react';
import Button from '../Button';
import renderer from 'react-test-renderer';

describe('the button component', () => {
    describe('given a text value', () => {
        it('should display a button with the given value', () => {

            let props = {
                text: 'My Test Button',
                click: () => null
            };

            const tree = renderer.create(
                <Button {...props} />
            ).toJSON();
            expect(tree).toMatchSnapshot();
            tree.props.onClick();
            expect(tree).toMatchSnapshot();
        });
    });
});