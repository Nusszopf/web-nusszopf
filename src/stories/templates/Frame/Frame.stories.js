import React from 'react'
import { Frame } from '../../templates'

export default {
  title: 'Design System/Templates/Frame',
  component: Frame,
}

export const Primary = () => (
  <Frame className="h-screen bg-gray-100">
    <div className="p-4 mb-2 text-center text-white bg-gray-300">framed content</div>
    <div className="p-4 mb-2 text-center text-white bg-gray-300">framed content</div>
    <div className="p-4 mb-2 text-center text-white bg-gray-300">framed content</div>
  </Frame>
)
