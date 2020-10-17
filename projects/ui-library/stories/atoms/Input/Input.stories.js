import React from 'react'
import Input from './Input.atom'

export default {
  title: 'Design System/Atoms/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component: '**UI atom** based on [Reakit Input](https://reakit.io/docs/input/).',
      },
    },
  },
}

export const Base = () => <Input placeholder="base size" />
export const Large = () => <Input size="large" placeholder="large size" />
export const Disabled = () => <Input disabled color="yellow300Blue400" placeholder="is disabled" />
