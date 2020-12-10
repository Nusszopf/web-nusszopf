import React from 'react'
import Menu from './Menu.organism'
import { MenuColor } from './Menu.theme'

export default {
  title: 'Design System/Organisms/Menu',
  component: Menu,
  parameters: {
    docs: {
      description: {
        component:
          '**Menu Organism** is based on [ReachUI MenuButton](https://reach.tech/menu-button) and [Button Atom](/design-system-atoms-button--filled).',
      },
    },
  },
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: Object.keys(MenuColor),
      },
    },
  },
}

const Template = args => <Menu {...args} />

export const Icon = Template.bind({})
Icon.args = {
  label: 'Menü',
  variant: 'icon',
  items: [
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
  ],
}

export const Button = Template.bind({})
Button.args = {
  label: 'Menü',
  variant: 'button',
  items: [
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
  ],
}
