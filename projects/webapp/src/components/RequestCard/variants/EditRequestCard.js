import PropTypes from 'prop-types'
import { Clickable } from 'reakit/Clickable'
import classnames from 'classnames'
import { MoreHorizontal } from 'react-feather'

import { Request } from '~/assets/icons'
import { requestCardData as cms } from '~/assets/data'
import { Text } from 'ui-library/stories/atoms'
import { Menu } from 'ui-library/stories/organisms'
import { RequestCategoryColor, RequestCategoryMenu } from '../RequestCard.theme'

const EditRequestCard = ({ onEdit, onDelete, request, className, ...props }) => (
  <div
    className={classnames(
      'relative w-full flex text-stone-800 rounded-lg cursor-pointer transition duration-150 ease-in-out ring-1 ring-transparent focus:outline-none',
      RequestCategoryColor[request.category],
      className
    )}
    {...props}>
    <Clickable type="button" onClick={() => onEdit(request)} className="flex-1 p-4 text-left focus:outline-none">
      <div className="flex items-start -mt-0.5 mr-4">
        <Request size={18} className="flex-shrink-0 mt-1.5 mr-1.5" />
        <Text variant="textSmMedium">{request.title}</Text>
      </div>
      <Text variant="textXs">
        {cms.createdAt} {new Date(request.created_at).toLocaleDateString('de-DE')}
      </Text>
    </Clickable>
    <div className="absolute top-0 right-0">
      <Menu
        label={<MoreHorizontal />}
        ariaLabel={cms.aria}
        className="mx-4 mb-1"
        innerClassName="py-2 mr-3"
        color={RequestCategoryMenu[request.category]}
        items={[
          {
            text: cms.edit,
            action: () => onEdit(request),
          },
          {
            text: cms.delete,
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
