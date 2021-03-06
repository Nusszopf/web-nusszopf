import React from 'react'
import Masonry from './Masonry.organism'

export default {
  title: 'Design System/Organisms/Masonry',
  component: Masonry,
  parameters: {
    docs: {
      description: {
        component: '**Masonry Organism** for a brick like grid layout.',
      },
    },
  },
}

export const Default = () => (
  <div className="p-4 pt-8 bg-gray-300">
    <Masonry>
      <div className="w-full h-12 bg-red-200 rounded-lg" />
      <div className="w-full h-24 bg-yellow-200 rounded-lg" />
      <div className="w-full h-12 bg-pink-200 rounded-lg" />
      <div className="w-full h-12 rounded-lg bg-turquoise-200" />
      <div className="w-full bg-blue-200 rounded-lg h-18" />
    </Masonry>
  </div>
)
