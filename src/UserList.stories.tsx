import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { UserList } from "./UserList";
import { UserListUnit } from "./UserListUnit";

export default {
    title: "UserList",
    component: UserList,
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
} as ComponentMeta<typeof UserList>;

const Template: ComponentStory<typeof UserList> = (args) => (
  <>
    <UserList {...args}>
        {" "}
        <UserListUnit {...args}>{" "}</UserListUnit>
    </UserList>
  </>
);

export const Default = Template.bind({});
Default.storyName = "UserList";
