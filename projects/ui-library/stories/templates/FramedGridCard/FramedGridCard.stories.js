import React from 'react'
import FramedGridCard from './FramedGridCard.template'

export default {
  title: 'Design System/Templates/FramedGridCard',
  component: FramedGridCard,
  parameters: {
    docs: {
      description: {
        component: 'A template for responsive app views.',
      },
    },
  },
}

export const Default = () => (
  <div className="pb-12 bg-gray-100">
    <div className="pb-12 bg-gray-100">
      <FramedGridCard className="lg:pt-12" bodyColor="bg-white lg:bg-gray-100" headerColor="bg-gray-300 lg:bg-gray-100">
        <FramedGridCard.Header className="bg-gray-300">header</FramedGridCard.Header>
        <FramedGridCard.Body className="bg-white">
          <FramedGridCard.Body.Col className="bg-red-300 ">col</FramedGridCard.Body.Col>
          <FramedGridCard.Body.Col className="bg-yellow-300 ">col</FramedGridCard.Body.Col>
        </FramedGridCard.Body>
      </FramedGridCard>
    </div>
  </div>
)

export const Two_Cols = () => (
  <div className="pb-12 bg-gray-100">
    <FramedGridCard className="lg:pt-12" bodyColor="bg-white lg:bg-gray-100" headerColor="bg-gray-300 lg:bg-gray-100">
      <FramedGridCard.Header className="bg-gray-300">header</FramedGridCard.Header>
      <FramedGridCard.Body variant="twoCols" className="bg-white">
        <FramedGridCard.Body.Col className="bg-red-300 ">col</FramedGridCard.Body.Col>
        <FramedGridCard.Body.Col className="bg-yellow-300 ">col</FramedGridCard.Body.Col>
      </FramedGridCard.Body>
    </FramedGridCard>
  </div>
)
