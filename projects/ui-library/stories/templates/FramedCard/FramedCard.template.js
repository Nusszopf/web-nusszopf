import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Frame } from '../../templates'

const FramedCard = ({ children, className }) => (
  <Frame fluid className="mt-12 mb-12 sm:mt-16">
    <div
      className={classnames(
        'flex flex-col items-center w-full max-w-sm sm:max-w-md mx-auto rounded-lg sm:px-12 sm:py-16',
        className
      )}>
      {children}
    </div>
  </Frame>
)

FramedCard.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default FramedCard
