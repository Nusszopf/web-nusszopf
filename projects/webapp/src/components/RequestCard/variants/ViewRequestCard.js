import PropTypes from 'prop-types'
import { Clickable } from 'reakit/Clickable'
import classnames from 'classnames'
import { ChevronRight } from 'react-feather'

import { Request } from '~/assets/icons'
import { Text } from 'ui-library/stories/atoms'
import { requestCardData as cms } from '~/assets/data'
import { RequestCategoryColor } from '../RequestCard.theme'

const ViewRequestCard = ({ onClick, request, className, ...props }) => (
  <Clickable
    onClick={() => onClick(request)}
    className={classnames(
      'w-full flex text-stone-800 p-4 justify-between  items-center ring-1 ring-transparent duration-150 ease-in-out rounded-lg cursor-pointer outline-none focus:outline-none',
      RequestCategoryColor[request.category],
      className
    )}
    {...props}>
    <div className="mr-4 text-left">
      <div className="flex items-start -mt-0.5">
        <Request size={18} className="flex-shrink-0 mt-1.5 mr-1.5" />
        <Text variant="textSmMedium">{request.title}</Text>
      </div>
      <Text variant="textXs">
        {cms.createdAt} {new Date(request.created_at).toLocaleDateString('de-DE')}
      </Text>
    </div>
    <ChevronRight size={30} className="flex-shrink-0" />
  </Clickable>
)

ViewRequestCard.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  request: PropTypes.object,
}

export default ViewRequestCard
