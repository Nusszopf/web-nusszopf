import React from 'react'
import { Input as ReakitInput } from 'reakit/Input'
import Input from './Input.atom'
import { InputSize, InputColor } from './Input.theme'

export default {
  title: 'Design System/Atoms/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component:
          '**Input Atom** based on [Reakit Input](https://reakit.io/docs/input/). Renders as TextArea if `as="textarea"` will be passed.',
      },
    },
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: Object.keys(InputSize),
      },
    },
    color: {
      control: {
        type: 'select',
        options: Object.keys(InputColor),
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
}

const Template = args => <Input {...args} />

export const Main = Template.bind({})
Main.args = {
  placeholder: 'base size',
  as: ReakitInput, // storybook workaround
}

export const Area = Template.bind({})
Area.args = {
  as: 'textarea',
  placeholder: 'text area',
}
