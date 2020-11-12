import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Text } from 'ui-library/stories/atoms'
import { Popover } from 'ui-library/stories/molecules'

const FieldTitle = ({ children, info, className }) => (
  <div className={classnames('flex mb-3 space-x-2', className)}>
    <Text>{children}</Text>
    {info && <Popover>{info}</Popover>}
  </div>
)

FieldTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  info: PropTypes.string,
}

export default FieldTitle
