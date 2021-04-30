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
  <div className="pb-12 bg-stone-300">
    <FramedGridCard
      className="lg:py-12"
      bodyColor="bg-white lg:bg-stone-300"
      headerColor="bg-stone-300 lg:bg-stone-300">
      <FramedGridCard.Header className="bg-stone-600">header</FramedGridCard.Header>
      <FramedGridCard.Body className="bg-white">
        <FramedGridCard.Body.Col className="bg-red-300 ">col</FramedGridCard.Body.Col>
        <FramedGridCard.Body.Col className="bg-yellow-300 ">col</FramedGridCard.Body.Col>
      </FramedGridCard.Body>
    </FramedGridCard>
  </div>
)

export const Two_Cols = () => (
  <div className="pb-12 bg-stone-300">
    <FramedGridCard
      className="lg:py-12"
      bodyColor="bg-white lg:bg-stone-300"
      headerColor="bg-stone-300 lg:bg-stone-300">
      <FramedGridCard.Header className="bg-stone-600">header</FramedGridCard.Header>
      <FramedGridCard.Body className="bg-white">
        <FramedGridCard.Body.Col variant="twoCols" className="bg-red-300 lg:col-start-2">
          col
        </FramedGridCard.Body.Col>
        <FramedGridCard.Body.Col variant="twoCols" className="bg-yellow-300">
          col
        </FramedGridCard.Body.Col>
      </FramedGridCard.Body>
    </FramedGridCard>
  </div>
)
