import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { MenuItem as RMenuItem } from 'reakit/Menu'

const MenuItem = ({ className, children, hasIcon, ...props }) => (
  <RMenuItem
    className={classnames(
      'block w-full py-1.5 text-left hover:bg-steel-300 focus:outline-none',
      {
        'pr-7 pl-14': !hasIcon,
        'px-7': hasIcon,
      },
      className
    )}
    {...props}>
    {children}
  </RMenuItem>
)

MenuItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  hasIcon: PropTypes.bool,
}

export default MenuItem
