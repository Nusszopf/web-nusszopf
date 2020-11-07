import React from 'react'
import Input from './Input.atom'

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
}

export const Area = () => <Input as="textarea" placeholder="text area" />
export const Date = () => <Input type="date" />
export const Base = () => <Input placeholder="base size" />
export const Large = () => <Input size="large" placeholder="large size" />
export const Disabled = () => <Input disabled color="yellow300Blue400" placeholder="is disabled" />
