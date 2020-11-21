import PropTypes from 'prop-types'
import { Clickable } from 'reakit/Clickable'
import classnames from 'classnames'
import { MoreHorizontal } from 'react-feather'

import { Text } from 'ui-library/stories/atoms'
import { Menu } from 'ui-library/stories/molecules'
import { CategoryColor } from './EditRequestCard.theme'

const EditRequestCard = ({ onEdit, onDelete, request, className, ...props }) => (
  <div
    className={classnames(
      'w-full flex hyphens-auto text-livid-800 transition-shadow duration-150 ease-in-out rounded-lg cursor-pointer hover:shadow-outline:lilac-700 focus:shadow-outline:lilac-700',
      CategoryColor[request.category],
      className
    )}
    {...props}>
    <Clickable type="button" onClick={() => onEdit(request)} className="flex-1 p-4 text-left focus:outline-none">
      <Text className="mr-4">{request.title}</Text>
      <Text variant="textXs">Erstellt am {new Date(request.created_at).toLocaleDateString('de-DE')}</Text>
    </Clickable>
    <div className="flex flex-col items-end justify-between">
      <Menu
        label={<MoreHorizontal />}
        items={[
          {
            type: 'button',
            text: 'Bearbeiten',
            action: () => onEdit(request),
          },
          {
            type: 'button',
            text: 'Löschen',
            seperator: true,
            action: () => onDelete(request),
          },
        ]}
      />
    </div>
  </div>
)

EditRequestCard.propTypes = {
  className: PropTypes.string,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  request: PropTypes.object,
}

export default EditRequestCard
