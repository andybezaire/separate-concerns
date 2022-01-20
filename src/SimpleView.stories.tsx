import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SimpleView from './SimpleView';

export default {
    title: 'Our Simple View',
    component: SimpleView,
} as ComponentMeta<typeof SimpleView>;

const Template: ComponentStory<typeof SimpleView> = (args) => <SimpleView title="Valid title" refresh={() => { }} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
    // // More on composing args: https://storybook.js.org/docs/react/writing-stories/args#args-composition
    // ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
    // ...HeaderStories.LoggedOut.args,
};