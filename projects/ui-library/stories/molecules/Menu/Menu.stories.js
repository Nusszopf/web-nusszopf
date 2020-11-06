import React from 'react'
import Menu from './Menu.molecule'

export default {
  title: 'Design System/Molecules/Menu',
  component: Menu,
  parameters: {
    docs: {
      description: {
        component:
          '**Menu Molecule** is based on [ReachUI MenuButton](https://reach.tech/menu-button) and [Button Atom](/design-system-atoms-button--filled).',
      },
    },
  },
}

export const Icon = () => (
  <Menu
    variant="icon"
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

export const Button = () => (
  <Menu
    label="Menü"
    variant="button"
    color="gray200"
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
