import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const Skeleton = ({ className, full = true, ...props }) => (
  <div
    aria-label="loading"
    className={classnames('animate-pulse rounded-lg', { 'w-full': full }, className)}
    {...props}
  />
)

Skeleton.propTypes = {
  className: PropTypes.string,
  full: PropTypes.bool,
}

export default Skeleton
