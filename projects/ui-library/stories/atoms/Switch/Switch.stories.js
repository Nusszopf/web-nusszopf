import React from 'react'
import Switch from './Switch.atom'
import { SwitchColor } from './Switch.theme'

export default {
  title: 'Design System/Atoms/Switch',
  component: Switch,
  parameters: {
    docs: {
      description: {
        component: '**Switch Atom** based on [Reakit Checkbox](https://reakit.io/docs/checkbox/).',
      },
    },
  },
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: Object.keys(SwitchColor),
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
}

const Template = args => <Switch {...args} />
export const Main = Template.bind({})
