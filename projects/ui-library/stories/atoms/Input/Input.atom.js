import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Input as ReakitInput } from 'reakit/Input'
import { Box } from 'reakit/Box'
import { InputColor, InputSize } from './Input.theme'

const Input = ({ as = ReakitInput, size = 'base', color = 'whiteGray600', className, ...props }) => (
  <Box
    as={as}
    className={classnames(
      'inline-block w-full transition-shadow duration-150 ease-in-out rounded-lg appearance-none focus:outline-none disabled:opacity-50 disabled:cursor-default',
      InputColor[color],
      InputSize[size],
      className
    )}
    {...props}
  />
)

Input.propTypes = {
  as: PropTypes.oneOfType([PropTypes.elementType, PropTypes.string]),
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.keys(InputColor)),
  size: PropTypes.oneOf(Object.keys(InputSize)),
}

export default Input
