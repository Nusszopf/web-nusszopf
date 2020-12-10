import React from 'react'
import { Frame } from '../../templates'

export default {
  title: 'Design System/Templates/Frame',
  component: Frame,
  parameters: {
    docs: {
      description: {
        component: 'A full-responsive wrapper for pages and sections.',
      },
    },
  },
}

export const Primary = () => (
  <Frame className="h-screen bg-stone-100">
    <div className="p-4 mb-2 text-center text-white bg-stone-300">framed content</div>
    <div className="p-4 mb-2 text-center text-white bg-stone-300">framed content</div>
    <div className="p-4 mb-2 text-center text-white bg-stone-300">framed content</div>
  </Frame>
)

export const Fluid = () => (
  <Frame fluid className="h-screen bg-stone-100">
    <div className="p-4 mb-2 text-center text-white bg-stone-300">framed fluid content</div>
    <div className="p-4 mb-2 text-center text-white bg-stone-300">framed fluid content</div>
    <div className="p-4 mb-2 text-center text-white bg-stone-300">framed fluid content</div>
  </Frame>
)
