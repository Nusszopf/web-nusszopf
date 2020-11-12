import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Text } from 'ui-library/stories/atoms'

const Avatar = ({ user, className, ...props }) => (
  <div className={classnames('flex items-center', className)} {...props}>
    <img className="w-16 h-16 bg-gray-600 rounded-full" src={user?.auth?.picture} alt="avatar" />
    <div className="ml-4">
      <Text variant="textSmMedium">{user?.auth?.name ?? '-'}</Text>
      {user?.data?.email && <Text variant="textSm">{user?.data?.email}</Text>}
    </div>
  </div>
)

Avatar.propTypes = {
  className: PropTypes.string,
  user: PropTypes.shape({
    auth: PropTypes.shape({ picture: PropTypes.string, name: PropTypes.string }),
    data: PropTypes.shape({ email: PropTypes.string }),
  }),
}

export default Avatar
