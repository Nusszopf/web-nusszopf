import React from 'react'
import { Input, INPUT_COLORS } from '../../atoms'

export default {
  title: 'Design System/Atoms/Input',
  component: Input,
}

export const Primary = () => (
  <div className="space-y-3">
    <Input placeholder="some placeholder" />
    <Input color={INPUT_COLORS.yellow300blue400} placeholder="some placeholder" />
  </div>
)
