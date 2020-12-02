import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const Skeleton = ({ className, ...props }) => (
  <div aria-label="loading" className={classnames('animate-pulse w-full rounded-lg', className)} {...props} />
)

Skeleton.propTypes = {
  className: PropTypes.string,
}

export default Skeleton
