import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { SelectColor } from './Select.theme'

const Select = ({ children, placeholder, color = 'lilac500', ...props }) => (
  <div className={classnames('px-4 rounded-md ', SelectColor[color])} {...props}>
    <select className="w-full py-3 font-semibold bg-transparent text-md focus:outline-none">
      {placeholder && <option>{placeholder}</option>}
      {children}
    </select>
  </div>
)

Select.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  placeholder: PropTypes.string,
  color: PropTypes.oneOf(Object.keys(SelectColor)),
}

export default Select
