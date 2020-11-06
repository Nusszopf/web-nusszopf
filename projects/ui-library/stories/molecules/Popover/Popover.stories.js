import React from 'react'
import Popover from './Popover.molecule'

export default {
  title: 'Design System/Molecules/Popover',
  component: Popover,
  parameters: {
    docs: {
      description: {
        component: '**Popover Molecule** based on [Reakit Popover](https://reakit.io/docs/popover/).',
      },
    },
  },
}

export const Default = () => (
  <div className="flex justify-center w-full mx-auto">
    <Popover />
  </div>
)
