import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Frame = ({ children, className, fluid = false, as = 'div', ...props }) => {
  const Component = as
  return (
    <Component className={classnames('px-6 sm:px-16 lg:px-24 xl:px-32', className)} {...props}>
      <div className={classnames({ 'lg:container sm:max-w-xl sm:mx-auto': !fluid, 'w-full': fluid })}>{children}</div>
    </Component>
  )
}

Frame.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  as: PropTypes.elementType,
  fluid: PropTypes.bool,
}

export default Frame
