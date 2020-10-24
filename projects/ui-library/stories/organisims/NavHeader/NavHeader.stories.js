import React from 'react'
import NavHeader from './NavHeader.organism'

export default {
  title: 'Design System/Organisms/NavHeader',
  component: NavHeader,
  parameters: {
    docs: {
      description: {
        component:
          '**NavHeader Organism** is a responsive navigation element at the top of the page that offers different routes depending on whether a user is logged in or not.',
      },
    },
  },
}

export const Default = () => <NavHeader />
