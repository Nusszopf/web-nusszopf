import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Switch as HSwitch } from '@headlessui/react'
import { SwitchColor } from './Switch.theme'

const Switch = ({ onCheck = () => {}, className, color = 'gray600', initialState = false }) => {
  const [enabled, setEnabled] = useState(initialState)

  useEffect(() => {
    onCheck(enabled)
  }, [enabled])

  return (
    <HSwitch
      checked={enabled}
      onChange={setEnabled}
      className={classnames(
        'relative inline-flex h-6 rounded-full w-10 border-2 focus:outline-none',
        SwitchColor[color].border,
        {
          [`${SwitchColor[color].on}`]: enabled,
          [`${SwitchColor[color].off}`]: !enabled,
        },
        className
      )}>
      <span className="sr-only">Enable notifications</span>
      <span
        className={classnames('inline-block w-5 h-5 transform duration-100 transition-transform rounded-full', {
          'translate-x-4': enabled,
          'translate-x-0': !enabled,
          [`${SwitchColor[color].on}`]: !enabled,
          [`${SwitchColor[color].off}`]: enabled,
        })}
      />
    </HSwitch>
  )
}

Switch.propTypes = {
  onCheck: PropTypes.func.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.keys(SwitchColor)),
  initialState: PropTypes.bool,
}

export default Switch
