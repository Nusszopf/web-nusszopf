import React from 'react'
import Select from './Select.atom'
import { SelectColor } from './Select.theme'

export default {
  title: 'Design System/Atoms/Select',
  component: Select,
  parameters: {
    docs: {
      description: {
        component:
          '**Select Atom** based on [HTML Select](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select).',
      },
    },
  },
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: Object.keys(SelectColor),
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
}

const Template = args => (
  <Select {...args}>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </Select>
)
export const Main = Template.bind({})
Main.args = {
  placeholder: 'ABC',
}
