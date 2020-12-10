import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { VisuallyHidden } from 'reakit/VisuallyHidden'

import { Text } from '../../atoms'
import { ProgressbarColor } from './Progressbar.theme'

const ProgressBar = ({ className, progress, label, color = 'lilac' }) => (
  <div className={className}>
    <div aria-hidden="true" className={classnames('w-full h-3 rounded-full', ProgressbarColor[color].bar)}>
      <div
        style={{ width: `${progress}%` }}
        className={classnames(
          'h-3 transition-all duration-300 ease-out rounded-full',
          ProgressbarColor[color].progress
        )}></div>
    </div>
    <VisuallyHidden>Progress {progress}%</VisuallyHidden>
    {label && (
      <Text className={classnames('mt-1', ProgressbarColor[color].label)} variant="textXs">
        {label}
      </Text>
    )}
  </div>
)

ProgressBar.propTypes = {
  className: PropTypes.string,
  progress: PropTypes.number.isRequired,
  label: PropTypes.string,
  color: PropTypes.oneOf(Object.keys(ProgressbarColor)),
}

export default ProgressBar
