import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Checkbox, useCheckboxState } from 'reakit/Checkbox'
import { Tabbable } from 'reakit/Tabbable'
import { uniqueId } from 'lodash'
import { VisuallyHidden } from 'reakit/VisuallyHidden'
import { SwitchColor, SwitchSize } from './Switch.theme'

const Switch = ({ onCheck = () => {}, className, size = SwitchSize.large, color = 'gray600' }) => {
  const checkbox = useCheckboxState({ state: true })
  const id = useState(uniqueId())
  useEffect(() => {
    onCheck(checkbox.state)
  }, [checkbox.state])

  return (
    <label htmlFor={`switch-${id}`}>
      <VisuallyHidden>
        <Checkbox id={`switch-${id}`} {...checkbox} />
      </VisuallyHidden>
      <Tabbable
        aria-hidden={true}
        className={classnames(
          'inline-flex flex-shrink-0 items-center transform duration-200 ease-out transition-colors rounded-full cursor-pointer outline-none',
          SwitchColor[color].border,
          {
            'w-10 h-6 border-2': size === SwitchSize.small,
            'w-16 h-9 border-2': size === SwitchSize.large,
            [`${SwitchColor[color].on}`]: checkbox.state,
            [`${SwitchColor[color].off}`]: !checkbox.state,
          },
          className
        )}>
        <div
          className={classnames('rounded-full transform duration-150 transition-transform', {
            'w-5 h-5 -mt-px': size === SwitchSize.small,
            'w-8 h-8 ': size === SwitchSize.large,
            'translate-x-4': checkbox.state && size === SwitchSize.small,
            'translate-x-7': checkbox.state && size === SwitchSize.large,
            [`${SwitchColor[color].on}`]: !checkbox.state,
            [`${SwitchColor[color].off}`]: checkbox.state,
          })}></div>
      </Tabbable>
    </label>
  )
}

Switch.propTypes = {
  onCheck: PropTypes.func.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(SwitchSize)),
  color: PropTypes.oneOf(Object.keys(SwitchColor)),
}

export default Switch
