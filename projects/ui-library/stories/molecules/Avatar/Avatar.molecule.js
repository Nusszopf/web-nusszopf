import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { truncate } from 'lodash'
import { Text } from '../../atoms'

const Avatar = ({ user, className, ...props }) => (
  <div className={classnames('flex items-center break-all', className)} {...props}>
    <img className="w-16 h-16 rounded-full bg-stone-800" src={user?.auth?.picture} alt="avatar" />
    <div className="ml-4">
      <Text variant="textSmMedium">{truncate(user?.auth?.name ?? '-', { length: 33 })}</Text>
      {user?.data?.email && <Text variant="textSm">{truncate(user?.data?.email ?? '-', { length: 33 })}</Text>}
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
