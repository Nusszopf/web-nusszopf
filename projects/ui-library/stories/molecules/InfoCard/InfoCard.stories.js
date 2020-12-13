import React from 'react'
import InfoCard from './InfoCard.molecule'

export default {
  title: 'Design System/Molecules/InfoCard',
  component: InfoCard,
  parameters: {
    docs: {
      description: {
        component: '**UI molecule** for a consistent quick info',
      },
    },
  },
}

export const Default = () => <InfoCard>Info Message</InfoCard>
