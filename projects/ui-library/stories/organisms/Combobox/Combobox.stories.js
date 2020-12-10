import React from 'react'
import Combobox from './Combobox.organism'

export default {
  title: 'Design System/Organisms/Combobox',
  component: Combobox,
  parameters: {
    docs: {
      description: {
        component: '**Combobox Organism** based on [ReachUI Combobox](https://reach.tech/combobox/).',
      },
    },
  },
}

export const Default = () => {
  return (
    <Combobox
      options={[
        { key: 1, value: '1' },
        { key: 2, value: '2' },
        { key: 3, value: '3' },
        { key: 4, value: '4' },
      ]}
    />
  )
}
