import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Radio } from 'reakit/Radio'

import Text from '../Text/Text.atom'

const Radiobox = ({ disabled = false, orientation, label, className, ...props }) => {
  const ref = useRef()
  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label>
        <Radio ref={ref} disabled={disabled} className="sr-only" {...props} />
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
            <span
              className={classnames('rounded-full w-3.5 h-3.5', {
                'bg-current': ref?.current?.checked,
                'bg-transparent': !ref?.current?.checked,
              })}
            />
          </span>
          <Text as="span" variant="textSm" className="ml-2">
            {label}
          </Text>
        </span>
      </label>
      {orientation === 'vertical' && <br />}
    </>
  )
}

Radiobox.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.node.isRequired,
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
}

export default Radiobox
