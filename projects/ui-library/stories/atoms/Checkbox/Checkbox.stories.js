import React from 'react'
import { Checkbox } from '../../atoms'

export default {
  title: 'Design System/Atoms/Checkbox',
  component: Checkbox,
}

export const Checked = () => <Checkbox checked={true} label="Is checked" />
export const Unchecked = () => <Checkbox checked={false} label="Is unchecked" />
