import React from 'react'
import Footer from './Footer.organism'
import { Text } from '../../atoms'

export default {
  title: 'Design System/Organisms/Footer',
  component: Footer,
  parameters: {
    docs: {
      description: {
        component: '**Footer Organism** is a specific framed element for different footer variations.',
      },
    },
  },
}

export const Row = () => (
  <Footer className="bg-turquoise-500">
    <Footer.LeftElement>Left Element</Footer.LeftElement>
    <Footer.RightElement sponsors={['vercel']} />
  </Footer>
)

export const Col = () => (
  <Footer variant="col" className="bg-blue-500">
    <Footer.LeftElement>Left Element</Footer.LeftElement>
    <Footer.RightElement sponsors={['auth0', 'vercel']}>
      <Text variant="textXs" className="hidden mr-6 md:block">
        Unterstützt von:
      </Text>
    </Footer.RightElement>
  </Footer>
)
