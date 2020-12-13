import React from 'react'
import InputGroup from './InputGroup.molecule'
import { Eye, Search } from 'react-feather'

export default {
  title: 'Design System/Molecules/InputGroup',
  component: InputGroup,
  parameters: {
    docs: {
      description: {
        component:
          '**UI molecule** for small input fields. Set clickable icons via `LeftElement` and/or `RightElement`. Based on [Reakit Clickable](https://reakit.io/docs/clickable/) and `Input.atom`.',
      },
    },
  },
}

export const IconLeft = () => (
  <InputGroup>
    <InputGroup.LeftElement onClick={console.log}>
      <Search size={28} />
    </InputGroup.LeftElement>
    <InputGroup.Input />
  </InputGroup>
)
export const IconRight = () => (
  <InputGroup>
    <InputGroup.Input />
    <InputGroup.RightElement onClick={console.log}>
      <Eye size={24} />
    </InputGroup.RightElement>
  </InputGroup>
)
