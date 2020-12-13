import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Radio } from 'reakit/Radio'
import { VisuallyHidden } from 'reakit/VisuallyHidden'

import Text from '../Text/Text.atom'

const Radiobox = ({ disabled = false, orientation, label, className, ...props }) => {
  const ref = useRef()
  return (
    <label className={classnames({ block: orientation === 'vertical' })}>
      <VisuallyHidden>
        <Radio ref={ref} disabled={disabled} {...props} />
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
        <span
          aria-hidden="true"
          className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-0.5 border-2 border-current rounded-full">
          <span className={classnames('rounded-full w-4 h-4 bg-current', { hidden: !ref?.current?.checked })} />
        </span>
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
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
  className: PropTypes.string,
}

export default Radiobox
