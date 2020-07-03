import PropTypes from 'prop-types'
import { Newsletter } from '../organisms'

const NewsletterSection = ({ node }) => {
  return <Newsletter apiUrl={`/api/newsletter/${node.type[0]}`} type={node.type[0]} text={node} />
}

NewsletterSection.propTypes = {
  node: PropTypes.shape({
    type: PropTypes.array,
    description: PropTypes.string,
    confirmation: PropTypes.string,
  }),
}

export default NewsletterSection
