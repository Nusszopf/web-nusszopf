import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Box as ReakitBox } from 'reakit/Box'
import { TextStyle } from './Text.theme'

const Text = ({ as = 'p', children, className, style = 'textMd', ...props }) => (
  <ReakitBox as={as} className={classnames(TextStyle[style], className)} {...props}>
    {children}
  </ReakitBox>
)

Text.propTypes = {
  as: PropTypes.oneOfType([PropTypes.elementType, PropTypes.string]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.oneOf(Object.keys(TextStyle)),
}

export default Text
