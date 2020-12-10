import React from 'react'
import Popover from './Popover.organism'

export default {
  title: 'Design System/Organisms/Popover',
  component: Popover,
  parameters: {
    docs: {
      description: {
        component: '**Popover Organism** based on [Reakit Popover](https://reakit.io/docs/popover/).',
      },
    },
  },
}

export const Default = () => (
  <div className="flex justify-center w-full mx-auto">
    <Popover>Info</Popover>
  </div>
)
