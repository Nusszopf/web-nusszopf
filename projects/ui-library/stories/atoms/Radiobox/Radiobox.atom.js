import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Circle, CheckCircle } from 'react-feather'
import { Radio } from 'reakit/Radio'
import { VisuallyHidden } from 'reakit/VisuallyHidden'
import Text from '../Text/Text.atom'

const Radiobox = ({ disabled = false, checked = false, label, className, ...props }) => (
  <label>
    <VisuallyHidden>
      <Radio disabled={disabled} checked={checked} {...props} />
    </VisuallyHidden>
    <span
      className={classnames('inline-flex', {
        'opacity-50 cursor-default': disabled,
        'cursor-pointer': !disabled,
      })}>
      {!checked && <Circle aria-hidden="true" className={classnames('mt-px flex-shrink-0', className)} />}
      {checked && <CheckCircle aria-hidden="true" className={classnames('mt-px flex-shrink-0', className)} />}
      <Text as="span" variant="textSm" className={classnames('ml-2', className)}>
        {label}
      </Text>
    </span>
  </label>
)

Radiobox.propTypes = {
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  label: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default Radiobox