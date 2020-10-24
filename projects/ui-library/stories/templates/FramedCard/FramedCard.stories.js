import React from 'react'
import { Text } from '../../atoms'
import { FramedCard } from '../../templates'

export default {
  title: 'Design System/Templates/FramedCard',
  component: FramedCard,
  parameters: {
    docs: {
      description: {
        component: 'A template for one card in a fluid Frame.',
      },
    },
  },
}

export const Primary = () => (
  <FramedCard className="bg-gray-100">
    <Text variant="textSm">framed card content</Text>
  </FramedCard>
)
