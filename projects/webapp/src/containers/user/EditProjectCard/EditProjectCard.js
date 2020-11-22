import PropTypes from 'prop-types'
import { Clickable } from 'reakit/Clickable'
import classnames from 'classnames'
import { MoreHorizontal, Eye, EyeOff } from 'react-feather'
import { truncate } from 'lodash'

import { Text } from 'ui-library/stories/atoms'
import { Menu } from 'ui-library/stories/molecules'
import { PROJECT } from '~/utils/enums'
import { RequestCard } from '~/components'

const EditProjectCard = ({ onClick, toggleVisibility, onEdit, onDelete, project, className, ...props }) => (
  <div
    className={classnames(
      'w-full flex hyphens-auto text-lilac-800 transition-shadow duration-150 ease-in-out rounded-lg cursor-pointer bg-lilac-300 hover:shadow-outline:lilac-700 focus:shadow-outline:lilac-700',
      className
    )}
    {...props}>
    <Clickable onClick={() => onEdit(project.id)} className="flex-1 p-4 text-left focus:outline-none" type="button">
      <Text className="mr-4">{project.title}</Text>
      <Text variant="textSm" className="mt-2 hyphens-auto">
        {truncate(project.goal, { length: 90 })}
      </Text>
      <div className="flex flex-col mt-4 sm:flex-row lg:flex-col">
        {project?.requests?.map((request, index) => (
          <RequestCard key={`rq-${index}`} request={request} className={index > 0 && 'mt-2'} />
        ))}
      </div>
    </Clickable>
    <div className="flex flex-col items-end justify-between">
      <Menu
        label={<MoreHorizontal />}
        items={[
          {
            type: 'button',
            text: 'Ansehen',
            action: () => onClick(project.id),
          },
          {
            type: 'button',
            text: 'Bearbeiten',
            action: () => onEdit(project.id),
          },
          {
            type: 'button',
            text: project.visibility === PROJECT.visibility.public ? 'Geheimhalten' : 'Veröffentlichen',
            action: () => toggleVisibility(project.id, project.visibility),
          },
          {
            type: 'button',
            text: 'Löschen',
            seperator: true,
            action: () => onDelete(project.id),
          },
        ]}
      />
      {project.visibility === PROJECT.visibility.public ? (
        <Eye size={21} className="m-4 text-lilac-600" />
      ) : (
        <EyeOff size={21} className="m-4 text-lilac-600" />
      )}
    </div>
  </div>
)

EditProjectCard.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  toggleVisibility: PropTypes.func,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  project: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    goal: PropTypes.string,
    visibility: PropTypes.oneOf[('private', 'public')],
    searchings: PropTypes.array,
    created_at: PropTypes.string,
    requests: PropTypes.array,
  }),
}

export default EditProjectCard
