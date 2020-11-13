import React from 'react'
import Switch from './Switch.atom'

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
}

export const Default = () => <Switch color="lilac800" />
