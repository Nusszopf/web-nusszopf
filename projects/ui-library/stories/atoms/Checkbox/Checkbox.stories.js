import React from 'react'
import Checkbox from './Checkbox.atom'

export default {
  title: 'Design System/Atoms/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: '**UI atom** based on [Reakit Checkbox](https://reakit.io/docs/checkbox/).',
      },
    },
  },
}

export const Checked = () => <Checkbox checked={true} label="Is checked" />
export const Unchecked = () => <Checkbox checked={false} label="Is unchecked" />
export const Disabled = () => <Checkbox disabled={true} label="Is disabled" />
