import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { SwitchColor } from './Switch.theme'
import { Text } from '../../atoms'
import { Checkbox as ReakitCheckbox } from 'reakit/Checkbox'
import { VisuallyHidden } from 'reakit/VisuallyHidden'

const Switch = ({ label, disabled, checked, className, color = 'gray600', ...props }) => (
  <label>
    <VisuallyHidden>
      <ReakitCheckbox disabled={disabled} checked={checked} {...props} />
    </VisuallyHidden>
    <span aria-hidden="true" className="inline-flex cursor-pointer">
      <span
        className={classnames(
          'relative inline-flex h-6 rounded-full w-10 border-2 focus:outline-none flex-shrink-0',
          SwitchColor[color].border,
          {
            [`${SwitchColor[color].on}`]: checked,
            [`${SwitchColor[color].off}`]: !checked,
          },
          className
        )}>
        <span
          className={classnames('inline-block w-5 h-5 transform duration-100 transition-transform rounded-full', {
            'translate-x-4': checked,
            'translate-x-0': !checked,
            [`${SwitchColor[color].on}`]: !checked,
            [`${SwitchColor[color].off}`]: checked,
          })}
        />
      </span>
      {label && (
        <Text as="span" className="block ml-3 -mt-px" variant="textSm">
          {label}
        </Text>
      )}
    </span>
  </label>
)

Switch.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.keys(SwitchColor)),
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.node,
}

export default Switch
