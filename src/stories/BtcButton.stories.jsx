import React from 'react';

import Button from '../components/Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'BitcoinUI/Button',
  component: Button,
  argTypes: {
    style: {
      options: ['filled', 'outline', 'free'],
      control: {type: 'radio'}
    },
    size: {
      options: ['small', 'default', 'large'],
      control: {type: 'radio'}
    }
  }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <div><Button {...args} /></div>;

export const Filled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Filled.args = {
  size: 'default',
  style: 'filled',
  label: true,
  icon: false,
  text: 'Filled Button',
  disabled: false
};

export const Outline = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Outline.args = {
  size: 'default',
  style: 'outline',
  label: true,
  icon: false,
  text: 'Outline Button',
  disabled: false
};

export const Free = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Free.args = {
  size: 'default',
  style: 'free',
  label: true,
  icon: false,
  text: 'Free Button',
  disabled: false
};
