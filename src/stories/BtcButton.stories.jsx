import React from 'react';
import Button from '../components/Button'
import {ArrowRightIcon, CheckIcon, CrossIcon} from '@bitcoin-design/bitcoin-icons-react/filled'

const icons = {
  ArrowRightIcon: <ArrowRightIcon />,
  CheckIcon: <CheckIcon />,
  CrossIcon: <CrossIcon />
}

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
    },
    icon: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: 'select',
        labels: {
          ArrowRightIcon: 'Arrow',
          CheckIcon: 'Check',
          CrossIcon: 'Cross'
        }
      }
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
  icon: <ArrowRightIcon />,
  text: 'Filled Button',
  disabled: false
};

export const Outline = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Outline.args = {
  size: 'default',
  style: 'outline',
  label: true,
  icon: <CheckIcon />,
  text: 'Outline Button',
  disabled: false
};

export const Free = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Free.args = {
  size: 'default',
  style: 'free',
  label: true,
  icon: <CrossIcon />,
  text: 'Free Button',
  disabled: false
};
