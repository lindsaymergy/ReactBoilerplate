jest.unmock('../Button');
import React from 'react';
import Button from '../Button';
import renderer from 'react-test-renderer';

describe('the avatar component', () => {
    describe('given a user name', () => {
        it('should display the users avatar', () => {

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