import React from 'react';

import Button from '../components/Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'BitcoinUI/Button',
  component: Button,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  size: 'large',
  style: 'filled',
  active: true,
  label: true,
  icon: false,
  text: 'Call to Action'
};

export const Secondary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Secondary.args = {
  size: 'large',
  style: 'outline',
  active: true,
  label: true,
  icon: false,
  text: 'Secondary Action'
};
