import PropTypes from 'prop-types'
import { PreviewRequestCard, ViewRequestCard, EditRequestCard, HitRequestCard } from './variants'
import { RequestVariant } from './RequestCard.theme'

const RequestCard = ({ variant, ...props }) => {
  switch (variant) {
    case RequestVariant.preview:
      return <PreviewRequestCard {...props} />
    case RequestVariant.view:
      return <ViewRequestCard {...props} />
    case RequestVariant.edit:
      return <EditRequestCard {...props} />
    case RequestVariant.hit:
      return <HitRequestCard {...props} />
  }
}

RequestCard.propTypes = {
  variant: PropTypes.oneOf(Object.keys(RequestVariant)).isRequired,
}

export default RequestCard
