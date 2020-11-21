import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Text } from 'ui-library/stories/atoms'
import { Popover } from 'ui-library/stories/molecules'

const FieldTitle = ({ children, info, className, color = 'lilac800' }) => (
  <div className={classnames('flex mb-3 space-x-2', className)}>
    <Text>{children}</Text>
    {info && <Popover color={color}>{info}</Popover>}
  </div>
)

FieldTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  info: PropTypes.string,
  color: PropTypes.string,
}

export default FieldTitle
