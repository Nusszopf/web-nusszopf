import React from 'react'
import Menu from './Menu.molecule'

export default {
  title: 'Design System/Molecules/Menu',
  component: Menu,
  parameters: {
    docs: {
      description: {
        component:
          '**Menu Molecule** is based on [Reakit Menu](https://reakit.io/docs/menu/) and [Button Atom](/design-system-atoms-button--filled).',
      },
    },
  },
}

export const Default = () => (
  <Menu
    label="Menü"
    items={[
      {
        type: 'button',
        text: 'Beschreibung',
        action: () => console.log('action'),
      },
      {
        type: 'link',
        text: 'Einstellungen',
        href: '/',
      },
    ]}
  />
)
