import PropTypes from 'prop-types'
import classnames from 'classnames'
import { truncate } from 'lodash'

import { Text } from 'ui-library/stories/atoms'
import { Request } from '~/assets/icons'
import { RequestCategoryColor } from '../RequestCard.theme'

const CarouselRequestCard = ({ request, className, ...props }) => (
  <div
    className={classnames(
      'w-full rounded-lg px-3 py-2 text-stone-800',
      RequestCategoryColor[request.category],
      className
    )}
    {...props}>
    <div className="flex items-start">
      <Request size={18} className="flex-shrink-0 mt-1 mr-1.5" />
      <Text variant="textXs" className="font-medium">
        {request.title}
      </Text>
    </div>
    <Text variant="textXs">{truncate(request.description, { length: 90 })}</Text>
  </div>
)

CarouselRequestCard.propTypes = {
  request: PropTypes.object,
  className: PropTypes.string,
}

export default CarouselRequestCard
