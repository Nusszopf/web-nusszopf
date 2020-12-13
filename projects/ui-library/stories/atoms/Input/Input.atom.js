import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Input as ReakitInput } from 'reakit/Input'
import { Box } from 'reakit/Box'
import { InputSize, InputColor } from './Input.theme'

const Input = ({ as = ReakitInput, color = 'steel', size = 'base', className, ...props }) => (
  <Box
    as={as}
    className={classnames(
      'inline-block w-full bg-transparent rounded-md appearance-none ring-2 ring-transparent placeholder-current',
      InputColor[color],
      'hover:ring-opacity-25 focus:ring-opacity-25 focus:outline-none focus:placeholder-transparent disabled:opacity-50 disabled:cursor-default',
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
