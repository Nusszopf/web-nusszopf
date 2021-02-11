import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Clickable } from 'reakit/Clickable'

const ElementVariant = {
  clickable: 'clickable',
  block: 'block',
}

const Element = ({ className, children, onClick, disabled, variant = ElementVariant.clickable, ...props }) => (
  <>
    {variant === ElementVariant.clickable ? (
      <Clickable
        as="div"
        className={classnames(
          'absolute top-0 h-full px-3 flex items-center outline-none cursor-pointer focus:outline-none',
          { 'cursor-default pointer-events-none opacity-50': disabled },
          className
        )}
        onClick={onClick}
        {...props}>
        {children}
      </Clickable>
    ) : (
      <div className={classnames('absolute top-0 h-full px-3 flex items-center', className)} {...props}>
        {children}
      </div>
    )}
  </>
)

Element.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(Object.values(ElementVariant)),
}

export default Element
