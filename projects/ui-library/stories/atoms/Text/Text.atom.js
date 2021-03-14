import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Box as ReakitBox } from 'reakit/Box'
import { TextVariant } from './Text.theme'

const Text = forwardRef(({ as = 'p', children, className, variant = 'textMd', ...props }, ref) => (
  <ReakitBox
    as={as}
    ref={ref}
    className={classnames(
      {
        'hyphens-auto': as !== 'h1' && as !== 'h2' && as !== 'h3' && as !== 'h4' && as !== 'h5' && as !== 'h6',
      },
      TextVariant[variant],
      className
    )}
    {...props}>
    {children}
  </ReakitBox>
))

Text.displayName = 'Text'
Text.propTypes = {
  as: PropTypes.oneOfType([PropTypes.elementType, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.oneOf(Object.keys(TextVariant)),
}

export default Text
