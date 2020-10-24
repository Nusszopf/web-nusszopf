import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Clickable } from 'reakit/Clickable'

const Element = ({ className, children, onClick, ...props }) => (
  <Clickable
    as="div"
    className={classnames(
      'absolute top-0 h-full px-3 flex items-center outline-none cursor-pointer focus:outline-none',
      className
    )}
    onClick={onClick}
    {...props}>
    {children}
  </Clickable>
)

Element.propTypes = { children: PropTypes.node, className: PropTypes.string, onClick: PropTypes.func }

export default Element
