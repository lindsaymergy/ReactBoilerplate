jest.dontMock('../Avatar');
import React from 'react';
import Avatar from '../Avatar';
import renderer from 'react-test-renderer';

describe('the avatar component', () => {
    describe('given a user name', () => {
        it('should display the users avatar', () => {

            let props =  {
                id: 2,
                user: 'dfederspiel',
                alt: 'photo of '
            };

            const tree = renderer.create(
                <Avatar
                    id={props.id} user={props.user} alt={props.alt}
                />
            ).toJSON();
            console.log(tree);
            //expect(tree).toMatchSnapshot();
        });
    });
});