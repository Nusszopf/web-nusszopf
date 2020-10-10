import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Button as RButton } from 'reakit/Button'

export const BTN_COLORS = {
  whiteGray600: 'nz-btn-white-gray600',
  blue400Yellow300: 'nz-btn-blue400-yellow300',
  pink400blue700: 'nz-btn-pink400-blue700',
  pink600yellow300: 'nz-btn-pink600-yellow300',
  yellow400yellow700: 'nz-btn-yellow400-yellow700 ',
  turquoise700turquoise500: 'nz-btn-turquoise-700turquoise600',
  blue400blue200: 'nz-btn-blue400-blue200',
}

const Button = ({ className, color = BTN_COLORS.whiteGray600, label, small, ...props }) => (
  <RButton
    className={classnames(
      'flex-shrink-0 text-lg font-semibold transition-shadow duration-150 ease-in-out rounded-full outline-none sm:w-auto focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed',
      { 'px-8 py-4': !small, 'py-2 px-4': small },
      color,
      className
    )}
    {...props}>
    {label}
  </RButton>
)

Button.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(BTN_COLORS)),
  label: PropTypes.string.isRequired,
  small: PropTypes.bool,
}

export default Button
