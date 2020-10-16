import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Input as ReakitInput } from 'reakit/Input'
import { InputColor, InputSize } from './Input.theme'

const Input = ({ size = 'base', icon, type, color = 'whiteGray600', className, ...props }) => (
  <ReakitInput
    className={classnames(
      'inline-block w-full transition-shadow duration-150 ease-in-out rounded-lg shadow-xs appearance-none focus:outline-none disabled:opacity-50 disabled:cursor-default',
      InputColor[color],
      InputSize[size],
      className
    )}
    {...props}
  />
)

Input.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.keys(InputColor)),
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(Object.keys(InputSize)),
  type: PropTypes.string,
  icon: PropTypes.node,
}

export default Input
