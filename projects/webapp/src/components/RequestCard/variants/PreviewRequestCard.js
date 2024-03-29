import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Request } from '~/assets/icons'
import { Text } from 'ui-library/stories/atoms'
import { requestCardData as cms } from '~/assets/data'
import { RequestCategoryColor } from '../RequestCard.theme'

const PreviewRequestCard = ({ request, className, ...props }) => (
  <div
    className={classnames(
      'w-full rounded-lg px-3 py-2 text-stone-800',
      RequestCategoryColor[request.category],
      className
    )}
    {...props}>
    <div className="flex items-start">
      <Request size={18} className="flex-shrink-0 mt-1.5 mr-1.5" />
      <Text data-test="text_title_preview-request-card" variant="textSmMedium">
        {request.title}
      </Text>
    </div>
    <Text variant="textXs">
      {cms.createdAt} {new Date(request.created_at).toLocaleDateString('de-DE')}
    </Text>
  </div>
)

PreviewRequestCard.propTypes = {
  request: PropTypes.object,
  className: PropTypes.string,
}

export default PreviewRequestCard
