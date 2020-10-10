import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Input as RInput } from 'reakit/Input'

export const INPUT_COLORS = {
  whiteGray600: 'nz-input-whiteGray600',
  yellow300blue400: 'nz-input-yellow300blue400',
}

const Input = ({ disabled = false, color = INPUT_COLORS.whiteGray600, className, ...props }) => (
  <RInput
    className={classnames(
      'inline-block w-full px-5 py-4 text-lg transition-shadow duration-150 ease-in-out border-3 rounded-lg shadow-xs appearance-none focus:outline-none',
      color,
      className,
      { 'opacity-50 cursor-not-allowed': disabled }
    )}
    disabled={disabled}
    {...props}
  />
)

Input.propTypes = {
  color: PropTypes.oneOf(Object.values(INPUT_COLORS)),
  disabled: PropTypes.bool,
  className: PropTypes.string,
}

export default Input
