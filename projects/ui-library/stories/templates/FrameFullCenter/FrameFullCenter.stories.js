import React from 'react'
import { FrameFullCenter } from '../../templates'

export default {
  title: 'Design System/Templates/FrameFullCenter',
  component: FrameFullCenter,
  parameters: {
    docs: {
      description: {
        component: 'A container inside pages. Helpful for fullscreen pages with centered content.',
      },
    },
  },
}

export const Main = () => (
  <div className="h-screen">
    <FrameFullCenter className="bg-stone-300">
      <div className="text-white bg-stone-600">centered content</div>
    </FrameFullCenter>
  </div>
)
