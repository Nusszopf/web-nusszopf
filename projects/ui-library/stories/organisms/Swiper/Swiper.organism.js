import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import AliceCarousel from 'react-alice-carousel'

const Swiper = ({ className, items = [] }) => (
  <div className={className}>
    <AliceCarousel
      autoPlay={true}
      autoPlayStrategy="default"
      autoPlayInterval={3000}
      disableButtonsControls={true}
      infinite={true}
      items={items}
      mouseTracking={true}
      paddingLeft={0}
      responsive={{
        0: { items: 1 },
        640: { items: 2 },
        1024: { items: 3 },
      }}
      renderDotsItem={({ isActive }) => (
        <div
          className={classnames('w-3 h-3 mx-2 rounded-full transition-colors duration-150 ease-out cursor-pointer', {
            'bg-lilac-600': isActive,
            'bg-lilac-400': !isActive,
          })}
        />
      )}
      touchTracking={true}
    />
  </div>
)

Swiper.propTypes = {
  items: PropTypes.array,
  className: PropTypes.string,
}

export default Swiper
