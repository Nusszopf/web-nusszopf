import React from 'react'
import { FrameFullCenter } from '../../templates'

export default {
  title: 'Design System/Templates/FrameFullCenter',
  component: FrameFullCenter,
}

export const Primary = () => (
  <div className="h-screen">
    <FrameFullCenter className="bg-gray-100">
      <div className="p-4 text-white bg-gray-300">centered content</div>
    </FrameFullCenter>
  </div>
)

export const With_Flex = () => (
  <div className="h-screen">
    <FrameFullCenter className="bg-gray-100" flex="items-center justify-end">
      <div className="p-4 text-white bg-gray-300">centered content</div>
    </FrameFullCenter>
  </div>
)

export const With_Footer = () => (
  <div className="h-screen">
    <FrameFullCenter className="bg-gray-100" footer={<div className="text-center text-white bg-gray-500">footer</div>}>
      <div className="p-4 text-white bg-gray-300">centered content</div>
    </FrameFullCenter>
  </div>
)
