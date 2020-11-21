import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { SelectColor } from './Select.theme'
import { ChevronDown } from 'react-feather'

const Select = ({ children, className, placeholder, color = 'lilac800', ...props }) => (
  <div className={classnames('relative rounded-md cursor-pointer', SelectColor[color], className)}>
    <select
      className="inline-block w-full py-2 pl-3 pr-10 font-semibold bg-transparent appearance-none cursor-pointer text-md focus:outline-none"
      {...props}>
      {placeholder && <option>{placeholder}</option>}
      {children}
    </select>
    <div className="absolute top-0 right-0 flex items-center justify-end h-full pr-2 pointer-events-none">
      <ChevronDown className="flex-shrink-0 -mb-px" />
    </div>
  </div>
)

Select.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  placeholder: PropTypes.string,
  color: PropTypes.oneOf(Object.keys(SelectColor)),
}

export default Select
