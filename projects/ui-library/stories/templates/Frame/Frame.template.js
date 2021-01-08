import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const FrameSize = {
  default: 'sm:max-w-xl',
  large: 'sm:max-w-2xl',
}

const Frame = ({ children, className, fluid = false, as = 'div', size = 'default', ...props }) => {
  const Component = as
  return (
    <Component className={classnames('px-6 sm:px-16 lg:px-24 xl:px-32', className)} {...props}>
      <div
        className={classnames({
          'lg:container sm:max-w-xl sm:mx-auto': !fluid,
          [FrameSize[size]]: !fluid,
          'w-full': fluid,
        })}>
        {children}
      </div>
    </Component>
  )
}

Frame.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  as: PropTypes.elementType,
  fluid: PropTypes.bool,
  size: PropTypes.oneOf(Object.keys(FrameSize)),
}

export default Frame
