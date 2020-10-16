import React from 'react'
import Tab from './Tab.molecule'

export default {
  title: 'Design System/Molecules/Tab',
  component: Tab,
  parameters: {
    docs: {
      description: {
        component: '**UI molecule** based on [Reakit Tab](https://reakit.io/docs/tab/).',
      },
    },
  },
}

export const Default = () => (
  <Tab ariaLabel="Auth Navigation" labelLeft="Einloggen" labelRight="Registrieren">
    <Tab.Panel>Panel 1</Tab.Panel>
    <Tab.Panel>Panel 2</Tab.Panel>
  </Tab>
)
