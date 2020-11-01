import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Text } from 'ui-library/stories/atoms'

const Avatar = ({ user, className, ...props }) => (
  <div className={classnames('flex items-center', className)} {...props}>
    <img className="w-16 h-16 bg-gray-600 rounded-full" src={user?.picture} alt="avatar" />
    <div className="ml-4">
      <Text variant="textSmMedium">{user?.name ?? '-'}</Text>
      {user?.email && <Text variant="textSm">{user?.email}</Text>}
    </div>
  </div>
)

Avatar.propTypes = {
  className: PropTypes.string,
  user: PropTypes.shape({
    picture: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
  }),
}

export default Avatar
