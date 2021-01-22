import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { truncate } from 'lodash'
import { Text } from '../../atoms'

const Avatar = ({ user, className, ...props }) => {
  const imgSource = useMemo(() => {
    return user?.auth?.picture && user?.auth?.picture !== 'none'
      ? user?.auth?.picture
      : user?.data?.name
      ? `https://eu.ui-avatars.com/api/?name=${user?.data?.name}&size=128&background=CFD8DC&color=37474F&length=1&font-size=0.6&uppercase=true`
      : ''
  }, [user])

  return (
    <div className={classnames('flex items-center hyphens-auto', className)} {...props}>
      <div className="flex-shrink-0 overflow-hidden border-2 rounded-full border-steel-700 bg-steel-700">
        <img className="w-14 h-14" src={imgSource} alt="avatar" />
      </div>
      <div className="ml-5">
        <Text variant="textSmMedium">{truncate(user?.data?.name, { length: 33 })}</Text>
        {user?.data?.email && <Text variant="textSm">{truncate(user?.data?.email ?? '-', { length: 33 })}</Text>}
      </div>
    </div>
  )
}

Avatar.propTypes = {
  className: PropTypes.string,
  user: PropTypes.shape({
    auth: PropTypes.object,
    data: PropTypes.shape({ email: PropTypes.string, name: PropTypes.string }),
  }),
}

export default Avatar
