import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { UserDetailsView } from './UserDetailsView';

export default {
    title: 'User Detaisl View',
    component: UserDetailsView,
} as ComponentMeta<typeof UserDetailsView>;

const Template: ComponentStory<typeof UserDetailsView> = (args) => <UserDetailsView name={args.name} address={args.address} phone={args.phone} />;

export const Alice = Template.bind({});
Alice.args = {
    name: 'Alice',
    address: '123 Main St',
    phone: '+1-555-555-5555',
};

export const Bob = Template.bind({});
Bob.args = {
    name: 'Bob',
    address: '456 Main St',
    phone: '+1-333-555-5555',
};