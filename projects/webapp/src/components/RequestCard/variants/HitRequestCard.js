import PropTypes from 'prop-types'
import classnames from 'classnames'
import { truncate } from 'lodash'

import { Text } from 'ui-library/stories/atoms'
import { Request } from '~/assets/icons'
import { RequestCategoryColor } from '../RequestCard.theme'

const HitRequestCard = ({ request, className, ...props }) => (
  <div
    className={classnames(
      'w-full rounded-lg px-3 py-2 text-stone-800',
      RequestCategoryColor[request.req_type],
      className
    )}
    {...props}>
    <div className="flex items-start">
      <Request size={18} className="flex-shrink-0 mt-1 mr-1" />
      <Text
        variant="textXs"
        className="font-medium"
        dangerouslySetInnerHTML={{ __html: request?._formatted?.req_title || request?.req_title }}
      />
    </div>
    {request?._formatted?.req_description && (
      <Text
        variant="textXs"
        dangerouslySetInnerHTML={{ __html: truncate(request._formatted?.req_description, { length: 90 }) }}
      />
    )}
  </div>
)

HitRequestCard.propTypes = {
  request: PropTypes.object,
  className: PropTypes.string,
}

export default HitRequestCard
