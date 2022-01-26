import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { UserListView } from './UserListView';

export default {
    title: 'User List View',
    component: UserListView,
} as ComponentMeta<typeof UserListView>;

const Template: ComponentStory<typeof UserListView> = (args) => <UserListView users={args.users} />;

export const ShortList = Template.bind({});
ShortList.args = {
    users: ['Alice', 'Bob', 'Charlie'],
};

export const LongList = Template.bind({});
LongList.args = {
    users: ['Alice', 'Bob', 'Charlie', 'Dennis', 'Eve', 'Frank', 'George', 'Harry', 'Ivy', 'Jack', 'Karen', 'Linda', 'Marge', 'Ned', 'Olive', 'Pete', 'Quentin', 'Ralph', 'Susan', 'Ted', 'Uma', 'Violet', 'Wendy', 'Xander', 'Yolanda', 'Zed'],
};