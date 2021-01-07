import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Input as ReakitInput } from 'reakit/Input'
import { Box } from 'reakit/Box'
import { InputSize, InputColor } from './Input.theme'

const Input = forwardRef(
  ({ as = ReakitInput, displayRing = true, color = 'steel', size = 'base', className, ...props }, ref) => (
    <Box
      as={as}
      ref={ref}
      className={classnames(
        'inline-block w-full bg-transparent rounded-md appearance-none placeholder-current',
        InputColor[color],
        { 'ring-2 ring-transparent hover:ring-opacity-25 focus:ring-opacity-25': displayRing },
        'focus:outline-none focus:placeholder-transparent disabled:opacity-50 disabled:cursor-default',
        InputSize[size],
        className
      )}
      {...props}
    />
  )
)

Input.displayName = 'Input'
Input.propTypes = {
  as: PropTypes.oneOfType([PropTypes.elementType, PropTypes.string]),
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.keys(InputColor)),
  size: PropTypes.oneOf(Object.keys(InputSize)),
  displayRing: PropTypes.bool,
}

export default Input
