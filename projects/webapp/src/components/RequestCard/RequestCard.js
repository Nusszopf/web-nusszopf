import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Text } from 'ui-library/stories/atoms'
import { RequestCategoryColor } from '~/styles/theme'

const RequestCard = ({ request, className, ...props }) => (
  <div
    className={classnames(
      'w-full rounded-lg px-3 py-2 text-livid-800',
      RequestCategoryColor[request.category],
      className
    )}
    {...props}>
    <Text variant="textSmMedium">{request.title}</Text>
    <Text variant="textXs">Erstellt am {new Date(request.created_at).toLocaleDateString('de-DE')}</Text>
  </div>
)

RequestCard.propTypes = {
  request: PropTypes.object,
  className: PropTypes.string,
}

export default RequestCard
