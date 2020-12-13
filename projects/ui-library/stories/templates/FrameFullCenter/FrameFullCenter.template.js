import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const FrameFullCenter = ({ children, className, flex, ...props }) => (
  <div
    className={classnames(
      'flex flex-1 flex-col px-6 pt-12 sm:px-16 lg:px-24 xl:px-32',
      { 'items-center justify-center': !flex },
      className
    )}
    {...props}>
    {children}
  </div>
)

FrameFullCenter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  flex: PropTypes.string,
}

export default FrameFullCenter
