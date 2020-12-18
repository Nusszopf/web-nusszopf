import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { truncate } from 'lodash'
import { Text } from '../../atoms'

const Avatar = ({ user, className, ...props }) => {
  const parsedUserName = useMemo(() => {
    if (!user?.auth) return ''
    const name = user?.auth['https://hasura.io/jwt/claims']?.username ?? user?.auth?.name ?? user?.auth?.nickname ?? '-'
    return truncate(name, { length: 33 })
  }, [user])

  return (
    <div className={classnames('flex items-center break-all', className)} {...props}>
      <div className="overflow-hidden border-2 rounded-xl border-steel-700 bg-steel-700">
        <img className="flex-shrink-0 w-16 h-16" src={user?.auth?.picture} alt="avatar" />
      </div>
      <div className="ml-6">
        <Text variant="textSmMedium">{parsedUserName}</Text>
        {user?.data?.email && <Text variant="textSm">{truncate(user?.data?.email ?? '-', { length: 33 })}</Text>}
      </div>
    </div>
  )
}

Avatar.propTypes = {
  className: PropTypes.string,
  user: PropTypes.shape({
    auth: PropTypes.object,
    data: PropTypes.shape({ email: PropTypes.string }),
  }),
}

export default Avatar
