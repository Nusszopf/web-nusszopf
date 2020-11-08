import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Circle, CheckCircle } from 'react-feather'
import { Radio } from 'reakit/Radio'
import { VisuallyHidden } from 'reakit/VisuallyHidden'
import Text from '../Text/Text.atom'

const Radiobox = ({ disabled = false, label, className, ...props }) => {
  const ref = useRef()
  return (
    <label>
      <VisuallyHidden>
        <Radio ref={ref} checkeddisabled={disabled} {...props} />
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
        {!ref?.current?.checked && <Circle aria-hidden="true" className="flex-shrink-0 mt-px" />}
        {ref?.current?.checked && <CheckCircle aria-hidden="true" className="flex-shrink-0 mt-px" />}
        <Text as="span" variant="textSm" className="ml-2">
          {label}
        </Text>
      </span>
    </label>
  )
}

Radiobox.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default Radiobox
