import PropTypes from 'prop-types'
import { useState } from 'react'
import classnames from 'classnames'
import { X } from 'react-feather'
import { Clickable } from 'reakit/Clickable'

import { bannerData } from '~/assets/data'
import { Text, Route } from 'ui-library/stories/atoms'
import { Frame } from 'ui-library/stories/templates'

const Banner = ({ project, user }) => {
  const [isVisible, setIsVisible] = useState(project.user_id === user)
  return (
    <div className={classnames('py-4 bg-livid-300', { hidden: !isVisible })}>
      <Frame className="text-livid-800">
        <div className="relative flex items-center">
          <Text variant="textSm" className="pr-18">
            {project.visibility === 'public' ? bannerData.info.public : bannerData.info.private}{' '}
            <Route
              href={`/user/project/${project.id}/edit`}
              title={bannerData.edit.meta}
              ariaLabel={bannerData.edit.meta}
              active={true}>
              {bannerData.edit.text[0]}
            </Route>
            {bannerData.edit.text[1]}
          </Text>
          <Clickable onClick={() => setIsVisible(false)}>
            <X size={21} className="absolute top-0 right-0" />
          </Clickable>
        </div>
      </Frame>
    </div>
  )
}

Banner.propTypes = {
  project: PropTypes.object.isRequired,
  user: PropTypes.string,
}

export default Banner
