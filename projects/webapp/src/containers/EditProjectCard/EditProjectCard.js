import PropTypes from 'prop-types'
import { Clickable } from 'reakit/Clickable'
import classnames from 'classnames'
import { Edit3, Eye, EyeOff } from 'react-feather'
import { truncate } from 'lodash'

import { Text } from 'ui-library/stories/atoms'
import { profileData } from '../../assets/data'

const EditProjectCard = ({ onClick, project, className, ...props }) => (
  <Clickable
    onClick={() => onClick(project.id)}
    className={classnames(
      'w-full p-4 text-left hyphens-auto text-lilac-800 transition-shadow duration-150 ease-in-out rounded-lg cursor-pointer bg-lilac-300 focus:outline-none hover:shadow-outline:lilac-700 focus:shadow-outline:lilac-700',
      className
    )}
    {...props}>
    <div className="flex justify-between">
      <Text>{project.title}</Text>
      <div className="flex space-x-4">
        {project.isVisible ? <Eye /> : <EyeOff />}
        <Edit3 />
      </div>
    </div>
    <Text variant="textSm" className="mt-2">
      {truncate(project.goal, { length: 100 })}
    </Text>
    <div className="flex flex-col mt-6 sm:flex-row lg:flex-col">
      <Text variant="textXs" className="sm:mr-4 lg:mr-0">
        <span className="mr-2 font-medium">{project.searchings.length}</span>
        {profileData.project.searchings}
      </Text>
      <Text variant="textXs">
        {profileData.project.date} {new Date(project.created_at).toLocaleDateString()}
      </Text>
    </div>
  </Clickable>
)

EditProjectCard.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  project: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    goal: PropTypes.string,
    isVisible: PropTypes.bool,
    searchings: PropTypes.array,
    created_at: PropTypes.string,
  }),
}

export default EditProjectCard
