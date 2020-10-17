import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Box as ReakitBox } from 'reakit/Box'
import { Button as ReakitButton } from 'reakit/Button'
import { ButtonColor, ButtonSize, ButtonStyle } from './Button.theme'

const Button = ({
  className,
  children,
  style = ButtonStyle.filled,
  size = 'base',
  color = 'gray600gray200',
  as = ReakitButton,
  iconLeft,
  iconRight,
  disabled,
  ...props
}) => (
  <ReakitBox
    className={classnames(
      'outline-none focus:outline-none',
      { 'opacity-50': disabled, 'cursor-default': disabled, 'cursor-pointer': !disabled },
      ButtonSize[size],
      ButtonColor[color][style],
      className
    )}
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

Button.propTypes = {
  as: PropTypes.oneOfType([PropTypes.elementType, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.oneOf(Object.keys(ButtonColor)),
  disabled: PropTypes.bool,
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  style: PropTypes.oneOf(Object.keys(ButtonStyle)),
  size: PropTypes.oneOf(Object.keys(ButtonSize)),
}

export default Button
