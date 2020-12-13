import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Text } from 'ui-library/stories/atoms'
import { RequestCategoryColor } from '../RequestCard.theme'

const PreviewRequestCard = ({ request, className, ...props }) => (
  <div
    className={classnames(
      'w-full rounded-lg px-3 py-2 text-stone-800',
      RequestCategoryColor[request.category],
      className
    )}
    {...props}>
    <Text variant="textSmMedium">{request.title}</Text>
    <Text variant="textXs">Erstellt am {new Date(request.created_at).toLocaleDateString('de-DE')}</Text>
  </div>
)

PreviewRequestCard.propTypes = {
  request: PropTypes.object,
  className: PropTypes.string,
}

export default PreviewRequestCard
