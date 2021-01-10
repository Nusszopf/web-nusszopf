import PropTypes from 'prop-types'
import { Clickable } from 'reakit/Clickable'
import classnames from 'classnames'
import { MoreHorizontal } from 'react-feather'

import { Request } from '~/assets/icons'
import { Text } from 'ui-library/stories/atoms'
import { Menu } from 'ui-library/stories/organisms'
import { RequestCategoryColor, RequestCategoryMenu } from '../RequestCard.theme'

const EditRequestCard = ({ onEdit, onDelete, request, className, ...props }) => (
  <div
    className={classnames(
      'w-full flex hyphens-auto text-stone-800 rounded-lg cursor-pointer transition duration-150 ease-in-out ring-1 ring-transparent focus:outline-none',
      RequestCategoryColor[request.category],
      className
    )}
    {...props}>
    <Clickable type="button" onClick={() => onEdit(request)} className="flex-1 p-4 text-left focus:outline-none">
      <div className="flex items-start -mt-0.5 mr-4">
        <Request size={18} className="flex-shrink-0 mt-1.5 mr-1.5" />
        <Text variant="textSmMedium">{request.title}</Text>
      </div>
      <Text variant="textXs">Erstellt am {new Date(request.created_at).toLocaleDateString('de-DE')}</Text>
    </Clickable>
    <div className="flex flex-col items-end justify-between">
      <Menu
        className="mt-2 mr-4"
        label={<MoreHorizontal />}
        color={RequestCategoryMenu[request.category]}
        items={[
          {
            type: 'button',
            text: 'Bearbeiten',
            action: () => onEdit(request),
          },
          {
            type: 'button',
            text: 'Löschen',
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
