import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import UserList from "./UserList";

export default {
  title: "UserList View",
  component: UserList,
} as ComponentMeta<typeof UserList>;

const Template: ComponentStory<typeof UserList> = (args) => (
  <>
    <UserList temp="Valid title" />
    <UserList temp="Valid title" />
  </>
);

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  // // More on composing args: https://storybook.js.org/docs/react/writing-stories/args#args-composition
  // ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  // ...HeaderStories.LoggedOut.args,
};
