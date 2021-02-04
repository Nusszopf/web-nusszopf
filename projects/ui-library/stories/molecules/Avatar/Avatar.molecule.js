import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Edit3 } from 'react-feather'
import { truncate } from 'lodash'
import { Clickable } from 'reakit/Clickable'

import { Text } from '../../atoms'
import { avatarData as cms } from '../../../assets/data'
import { AvatarVariant } from './Avatar.theme'
import AvatarSkeleton from './Avatar.skeleton'

const Avatar = ({ user, className, variant = 'profile', project, onEdit, loading, ...props }) => {
  const isSocialAccount = user?.auth?.sub?.includes('google') || user?.auth?.sub?.includes('apple')

  const imgSource = useMemo(() => {
    return user?.data?.picture
      ? user.data.picture
      : user?.data?.name
      ? `https://eu.ui-avatars.com/api/?name=${user.data.name}&size=128&background=CFD8DC&color=37474F&length=1&font-size=0.6&uppercase=true`
      : ''
  }, [user])

  return (
    <>
      {loading ? (
        <AvatarSkeleton className={className} />
      ) : (
        <div className={classnames('flex items-center hyphens-auto', className)} {...props}>
          <div className="relative flex-shrink-0 overflow-hidden border-2 rounded-full border-steel-700 bg-steel-700">
            <img
              className={classnames('w-14 h-14', {
                'opacity-30': variant === AvatarVariant.settings && !isSocialAccount,
              })}
              src={imgSource}
              alt="avatar"
            />
            {variant === AvatarVariant.settings && !isSocialAccount && (
              <Clickable
                as="div"
                onClick={onEdit}
                className="absolute p-3 transition-transform duration-150 ease-out transform scale-100 outline-none cursor-pointer text-steel-100 left-1 top-1 hover:scale-110">
                <Edit3 />
              </Clickable>
            )}
          </div>
          <div className="ml-5">
            <Text variant="textSmMedium">{truncate(user.data.name, { length: 33 })}</Text>
            {variant !== AvatarVariant.project ? (
              <Text variant="textSm">{truncate(user.data.private.email, { length: 33 })}</Text>
            ) : (
              <Text variant="textSm">
                {cms.createdAt} {new Date(project.created_at).toLocaleDateString('de-DE')}
              </Text>
            )}
          </div>
        </div>
      )}
    </>
  )
}

Avatar.propTypes = {
  className: PropTypes.string,
  isEditable: PropTypes.bool,
  onEdit: PropTypes.func,
  variant: PropTypes.oneOf(Object.values(AvatarVariant)),
  project: PropTypes.object,
  user: PropTypes.object,
  loading: PropTypes.bool,
}

export default Avatar
