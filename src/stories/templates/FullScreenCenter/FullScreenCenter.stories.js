import React from 'react'
import { FullScreenCenter } from '../../templates'

export default {
  title: 'Design System/Templates/FullScreenCenter',
  component: FullScreenCenter,
}

export const Primary = () => (
  <FullScreenCenter className="bg-gray-100">
    <div className="p-4 text-white bg-gray-300">centered content</div>
  </FullScreenCenter>
)
