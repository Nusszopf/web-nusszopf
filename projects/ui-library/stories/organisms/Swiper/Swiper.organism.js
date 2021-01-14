import React, { forwardRef } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import AliceCarousel from 'react-alice-carousel'

const Swiper = forwardRef(({ className, items = [], ...props }, ref) => (
  <div className={className}>
    <AliceCarousel
      ref={ref}
      autoPlay={true}
      autoPlayStrategy="none"
      autoPlayInterval={3000}
      disableButtonsControls={true}
      infinite={true}
      items={items}
      touchMoveDefaultEvents={false}
      mouseTracking={false}
      paddingLeft={0}
      responsive={{
        0: { items: 1 },
        639: { items: 2 },
        1023: { items: 3 },
      }}
      renderDotsItem={({ isActive }) => (
        <div
          className={classnames('w-3 h-3 mx-2 rounded-full transition-colors duration-150 ease-out cursor-pointer', {
            'bg-lilac-600': isActive,
            'bg-lilac-400': !isActive,
          })}
        />
      )}
      touchTracking={false}
      {...props}
    />
  </div>
))

Swiper.displayName = 'Swiper'
Swiper.propTypes = {
  items: PropTypes.array,
  className: PropTypes.string,
}

export default Swiper
