import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TopNav from './TopNav';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/TopNav',
  component: TopNav,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof TopNav>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TopNav> = (args) => <TopNav {...args} />;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  label: 'Hello world',
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  label: 'Click me',
};
