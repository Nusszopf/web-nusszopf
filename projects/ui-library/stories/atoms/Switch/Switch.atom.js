import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Checkbox, useCheckboxState } from 'reakit/Checkbox'
import { Tabbable } from 'reakit/Tabbable'
import { uniqueId } from 'lodash'

const SwitchSize = {
  small: 'small',
  large: 'large',
}

const Switch = ({ onCheck = () => {}, className, size = SwitchSize.large }) => {
  const checkbox = useCheckboxState({ state: true })
  const id = useState(uniqueId())
  useEffect(() => {
    onCheck(checkbox.state)
  }, [checkbox.state])

  return (
    <label htmlFor={`switch-${id}`}>
      <Checkbox
        id={`switch-${id}`}
        className="absolute w-0 h-px p-0 m-0 overflow-hidden whitespace-no-wrap"
        {...checkbox}
      />
      <Tabbable
        aria-hidden={true}
        className={classnames(
          'inline-flex flex-shrink-0 items-center border-gray-600  transform duration-200 ease-out transition-colors rounded-full cursor-pointer outline-none hover:shadow-outline:gray-600',
          {
            'w-10 h-6 border-2': size === SwitchSize.small,
            'w-16 h-9 border-2': size === SwitchSize.large,
            'bg-gray-300': checkbox.state,
          },
          className
        )}>
        <div
          className={classnames(' bg-gray-600 rounded-full transform duration-150 transition-transform', {
            'w-5 h-5 -mt-px': size === SwitchSize.small,
            'w-8 h-8 ': size === SwitchSize.large,
            'translate-x-4': checkbox.state && size === SwitchSize.small,
            'translate-x-7': checkbox.state && size === SwitchSize.large,
          })}></div>
      </Tabbable>
    </label>
  )
}

Switch.propTypes = {
  onCheck: PropTypes.func.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(SwitchSize)),
}

export default Switch
