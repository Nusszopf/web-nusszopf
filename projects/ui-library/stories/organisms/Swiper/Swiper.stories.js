import React from 'react'
import Swiper from './Swiper.organism'

export default {
  title: 'Design System/Organisms/Swiper',
  component: Swiper,
  parameters: {
    docs: {
      description: {
        component: '**Swiper Organism** based on [Swiper](https://swiperjs.com/react/).',
      },
    },
  },
}

export const Default = () => (
  <div className="w-full bg-lilac-100">
    <div className="container h-full p-6 mx-auto rounded-sm bg-lilac-400" />
    <div className="container h-full py-6 mx-auto">
      <Swiper
        className="bg-lilac-200 -mx-2.5"
        items={[
          <div key="swipe-item-1" className="h-12 mx-2.5 bg-lilac-400 rounded-sm">
            1
          </div>,
          <div key="swipe-item-2" className="h-8 mx-2.5 bg-lilac-400 rounded-sm">
            2
          </div>,
          <div key="swipe-item-3" className="h-12 mx-2.5 bg-lilac-400 rounded-sm">
            3
          </div>,
          <div key="swipe-item-4" className="h-8 mx-2.5 bg-lilac-400 rounded-sm">
            4
          </div>,
          <div key="swipe-item-5" className="h-16 mx-2.5 bg-lilac-400 rounded-sm">
            5
          </div>,
          <div key="swipe-item-6" className="h-10 mx-2.5 bg-lilac-400 rounded-sm">
            6
          </div>,
        ]}
      />
    </div>
  </div>
)
