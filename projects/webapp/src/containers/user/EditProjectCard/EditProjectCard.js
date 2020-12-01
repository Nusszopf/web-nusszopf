import PropTypes from 'prop-types'
import { Clickable } from 'reakit/Clickable'
import classnames from 'classnames'
import { MoreHorizontal, Eye, EyeOff } from 'react-feather'
import { truncate } from 'lodash'

import { Text } from 'ui-library/stories/atoms'
import { Menu } from 'ui-library/stories/molecules'
import { PROJECT } from '~/utils/enums'
import { RequestCard } from '~/components'
import { editProjectCardData as cms } from '~/assets/data'

const EditProjectCard = ({ onClick, toggleVisibility, onEdit, onDelete, project, className, ...props }) => (
  <div
    className={classnames(
      'w-full relative flex hyphens-auto border border-lilac-300 text-lilac-800 transition-shadow duration-150 ease-in-out rounded-lg cursor-pointer bg-lilac-200 ring-1 ring-transparent hover:ring-lilac-300',
      className
    )}
    {...props}>
    <Clickable onClick={() => onEdit(project.id)} className="flex-1 p-4 text-left focus:outline-none" type="button">
      <Text className="mr-10">
        {project.visibility === PROJECT.visibility.public ? (
          <Eye size={21} className="inline mr-1 -mt-1" />
        ) : (
          <EyeOff size={21} className="inline mr-1 -mt-1" />
        )}{' '}
        {project.title}
      </Text>
      <Text variant="textSm" className="mt-2 hyphens-auto">
        {truncate(project.goal, { length: 90 })}
      </Text>
      <div className="flex flex-col mt-4">
        {project?.requests?.map((request, index) => (
          <RequestCard
            key={`rq-${index}`}
            variant="preview"
            request={request}
            className={classnames({ 'mt-2': index > 0 })}
          />
        ))}
      </div>
    </Clickable>
    <div className="absolute top-0 right-0">
      <Menu
        label={<MoreHorizontal />}
        items={[
          {
            type: 'button',
            text: cms.actions[0],
            action: () => onClick(project.id),
          },
          {
            type: 'button',
            text: cms.actions[1],
            action: () => onEdit(project.id),
          },
          {
            type: 'button',
            text: project.visibility === PROJECT.visibility.public ? cms.actions[2] : cms.actions[3],
            action: () => toggleVisibility(project.id, project.visibility),
          },
          {
            type: 'button',
            text: cms.actions[4],
            action: () => onDelete(project.id),
          },
        ]}
      />
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
