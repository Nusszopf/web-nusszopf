import React from 'react'
import Select from './Select.atom'

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
}

export const Default = () => (
  <Select placeholder="placeholder">
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </Select>
)
