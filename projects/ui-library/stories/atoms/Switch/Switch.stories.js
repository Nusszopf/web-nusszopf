import React from 'react'
import Switch from './Switch.atom'

export default {
  title: 'Design System/Atoms/Switch',
  component: Switch,
  parameters: {
    docs: {
      description: {
        component: '**Switch Atom**.',
      },
    },
  },
}

export const Small = () => <Switch size="small" onCheck={console.log} />
export const Large = () => <Switch size="large" onCheck={console.log} />
