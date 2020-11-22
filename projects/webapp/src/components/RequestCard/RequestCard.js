import PropTypes from 'prop-types'
import { PreviewRequestCard, ViewRequestCard, EditRequestCard } from './variants'
import { RequestVariant } from './RequestCard.theme'

const RequestCard = ({ variant, ...props }) => {
  switch (variant) {
    case 'preview':
      return <PreviewRequestCard {...props} />
    case 'view':
      return <ViewRequestCard {...props} />
    case 'edit':
      return <EditRequestCard {...props} />
  }
}

RequestCard.propTypes = {
  variant: PropTypes.oneOf(Object.keys(RequestVariant)).isRequired,
}

export default RequestCard
