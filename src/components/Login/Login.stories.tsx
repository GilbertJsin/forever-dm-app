import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import Login from "./Login";

export default {
  title: "Components/Login",
  component: Login,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as Meta<typeof Login>;

const Template: StoryFn<typeof Login> = (args) => <Login {...args} />;

export const Default = Template.bind({});
Default.args = {};
