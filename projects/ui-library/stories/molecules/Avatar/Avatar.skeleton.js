import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Skeleton } from '../../atoms'

const AvatarSkeleton = ({ className, ...props }) => (
  <div className={classnames('flex items-center', className)} {...props}>
    <Skeleton rounded="full" full={false} className="flex-shrink-0 border-2 w-14 h-14 border-steel-700 bg-steel-700" />
    <div>
      <Skeleton full={false} className="h-3.5 ml-5 w-24 bg-steel-700" />
      <Skeleton full={false} className="w-40 h-3.5 mt-3 ml-5 bg-steel-700" />
    </div>
  </div>
)

AvatarSkeleton.propTypes = {
  className: PropTypes.string,
}

export default AvatarSkeleton
