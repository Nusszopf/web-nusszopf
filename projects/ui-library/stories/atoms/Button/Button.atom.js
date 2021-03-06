import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Box as ReakitBox } from 'reakit/Box'
import { Button as ReakitButton } from 'reakit/Button'
import { ButtonColor, ButtonSize, ButtonVariant } from './Button.theme'

const Button = forwardRef(
  (
    {
      className,
      children,
      variant = ButtonVariant.filled,
      size = 'base',
      color = 'steel',
      as = ReakitButton,
      iconLeft,
      iconRight,
      disabled,
      ...props
    },
    ref
  ) => (
    <ReakitBox
      className={classnames(
        'outline-none focus:outline-none',
        { 'opacity-50': disabled, 'cursor-default': disabled, 'cursor-pointer': !disabled },
        ButtonSize[size],
        ButtonColor[color][variant],
        className
      )}
      ref={ref}
      disabled={disabled}
      as={as}
      {...props}>
      {iconLeft || iconRight ? (
        <div className="flex items-center justify-center">
          {iconLeft && iconLeft}
          <span className={classnames({ 'ml-1': iconLeft && size === 'large', 'mr-1': iconRight && size === 'large' })}>
            {children}
          </span>
          {iconRight && iconRight}
        </div>
      ) : (
        <>{children}</>
      )}
    </ReakitBox>
  )
)

Button.displayName = 'Button'
Button.propTypes = {
  as: PropTypes.oneOfType([PropTypes.elementType, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.oneOf(Object.keys(ButtonColor)),
  disabled: PropTypes.bool,
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  variant: PropTypes.oneOf(Object.keys(ButtonVariant)),
  size: PropTypes.oneOf(Object.keys(ButtonSize)),
}

export default Button
