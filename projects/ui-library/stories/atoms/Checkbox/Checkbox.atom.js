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
      className={classnames(
        'inline-flex',
        {
          'opacity-50 cursor-default': disabled,
          'cursor-pointer': !disabled,
        },
        className
      )}>
      {!checked && <Square aria-hidden="true" className="flex-shrink-0 mt-px" />}
      {checked && <CheckSquare aria-hidden="true" className="flex-shrink-0 mt-px" />}
      <Text as="span" variant="textSm" className="ml-2">
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
