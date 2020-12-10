import React from 'react'
import Tab from './Tab.organism'

export default {
  title: 'Design System/Organisms/Tab',
  component: Tab,
  parameters: {
    docs: {
      description: {
        component:
          '**UI Organism** based on [ReachUI Tab](https://reach.tech/tabs). `Tab` to switch between two screens only.',
      },
    },
  },
}

export const Default = () => (
  <Tab labelLeft="Einloggen" labelRight="Registrieren">
    <Tab.Panel>Panel 1</Tab.Panel>
    <Tab.Panel>Panel 2</Tab.Panel>
  </Tab>
)
