import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const LoadingIndicator = ({ className, ...props }) => <div className={classnames('rainbow', className)} {...props} />

LoadingIndicator.propTypes = {
  className: PropTypes.string,
}

export default LoadingIndicator
