import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Square, CheckSquare } from 'react-feather'
import { Checkbox as ReakitCheckbox } from 'reakit/Checkbox'
import Text from '../Text/Text.atom'

const Checkbox = ({ disabled = false, checked = false, label, className, ...props }) => (
  <label>
    <ReakitCheckbox disabled={disabled} checked={checked} className="hidden" {...props} />
    <span
      className={classnames('inline-flex', {
        'opacity-50 cursor-default': disabled,
        'cursor-pointer': !disabled,
      })}>
      {!checked && <Square className={classnames('mt-px', className)} />}
      {checked && <CheckSquare className={classnames('mt-px', className)} />}
      <Text as="span" style="textSm" className={classnames('ml-2', className)}>
        {label}
      </Text>
    </span>
  </label>
)

Checkbox.propTypes = {
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  label: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default Checkbox
