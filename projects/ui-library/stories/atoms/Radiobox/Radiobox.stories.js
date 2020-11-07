import React from 'react'
import Radiobox from './Radiobox.atom'

export default {
  title: 'Design System/Atoms/Radiobox',
  component: Radiobox,
  parameters: {
    docs: {
      description: {
        component: '**Radiobox Atom** based on [Reakit Radio](https://reakit.io/docs/radio/).',
      },
    },
  },
}

export const Checked = () => <Radiobox checked={true} label="Is checked" />
export const Unchecked = () => <Radiobox checked={false} label="Is unchecked" />
export const Disabled = () => <Radiobox disabled={true} label="Is disabled" />
