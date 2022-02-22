import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {UserListUnit} from "./UserListUnit";

export default {
    title: "UserList View",
    component: UserListUnit,
    argTypes: {
        title: {
            defaultValue: "Nancy",
        },
        fullName: {
            defaultValue: "Nancy Stevens",
        },
        email: {
            defaultValue: "Email",
        },
        address: {
            defaultValue: "Address",
        },

    },
} as ComponentMeta<typeof UserListUnit>;

const Template: ComponentStory<typeof UserListUnit> = (args) => (
  <>
    <UserListUnit {...args}>
        {" "}
        <UserListUnit {...args} />{" "}
    </UserListUnit>
  </>
);

export const Default = Template.bind({});
Default.storyName = "UserList";
