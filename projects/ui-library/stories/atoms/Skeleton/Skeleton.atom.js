import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const Skeleton = ({ ariaLabel = 'loading', className, rounded = 'lg', full = true, ...props }) => (
  <div
    aria-label={ariaLabel}
    className={classnames(
      'animate-pulse box-content',
      { 'w-full': full, 'rounded-lg': rounded === 'lg', 'rounded-full': rounded === 'full' },
      className
    )}
    {...props}
  />
)

Skeleton.propTypes = {
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
  full: PropTypes.bool,
  rounded: PropTypes.oneOf(['lg', 'full']),
}

export default Skeleton
