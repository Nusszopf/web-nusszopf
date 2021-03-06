import React from 'react'
import ProgressBar from './Progressbar.molecule'

export default {
  title: 'Design System/Molecules/Progressbar',
  component: ProgressBar,
  parameters: {
    docs: {
      description: {
        component: '**Progressbar Atom**.',
      },
    },
  },
}

export const Default = () => (
  <div className="px-12 py-12 text-gray-250 bg-dark">
    <ProgressBar label="Label" progress={75} />
  </div>
)
