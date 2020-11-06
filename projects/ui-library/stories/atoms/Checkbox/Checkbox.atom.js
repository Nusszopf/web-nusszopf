import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Square, CheckSquare } from 'react-feather'
import { Checkbox as ReakitCheckbox } from 'reakit/Checkbox'
import { VisuallyHidden } from 'reakit/VisuallyHidden'
import Text from '../Text/Text.atom'

const Checkbox = ({ disabled = false, checked = false, label, className, ...props }) => (
  <label>
    <VisuallyHidden>
      <ReakitCheckbox disabled={disabled} checked={checked} {...props} />
    </VisuallyHidden>
    <span
      className={classnames('inline-flex', {
        'opacity-50 cursor-default': disabled,
        'cursor-pointer': !disabled,
      })}>
      {!checked && <Square aria-hidden="true" className={classnames('mt-px flex-shrink-0', className)} />}
      {checked && <CheckSquare aria-hidden="true" className={classnames('mt-px flex-shrink-0', className)} />}
      <Text as="span" variant="textSm" className={classnames('ml-2', className)}>
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
