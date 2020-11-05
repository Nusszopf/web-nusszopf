import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Info } from 'react-feather'
import { Text } from '../../atoms'

const InfoCard = ({ children, className }) => (
  <div className={classnames('flex p-4 rounded-lg', className)}>
    <Info className="flex-shrink-0 mr-2" size={25} />
    <Text as="span" variant="textSm" className="leading-snug text-left">
      {children}
    </Text>
  </div>
)

InfoCard.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export default InfoCard