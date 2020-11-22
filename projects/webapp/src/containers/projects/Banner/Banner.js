import PropTypes from 'prop-types'
import { useState } from 'react'
import classnames from 'classnames'
import { X } from 'react-feather'
import { Clickable } from 'reakit/Clickable'

import { Text, Route } from 'ui-library/stories/atoms'
import { Frame } from 'ui-library/stories/templates'

const Banner = ({ project, user }) => {
  const [isVisible, setIsVisible] = useState(project.user_id === user)
  return (
    <div className={classnames('py-3 bg-warning-300', { hidden: !isVisible })}>
      <Frame className="text-warning-700">
        <div className="relative flex items-center">
          <Text variant="textSm" className="pr-18">
            So sieht dein Projekt für andere Nusszöpfe aus.{' '}
            <Route
              href={`/user/project/${project.id}/edit`}
              title="Projekt bearbeiten"
              ariaLabel="Projekt bearbeiten"
              active={true}>
              Klick hier
            </Route>
            , wenn Du dein Projekt und deine Gesuche bearbeiten willst.
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
