import PropTypes from 'prop-types'
import { FramedGridCard } from 'ui-library/stories/templates'

const RequestsView = ({ project }) => {
  return (
    <FramedGridCard.Body gap="medium" className="grid-flow-row bg-white ">
      <FramedGridCard.Body.Col variant="twoCols" className="lg:pr-4 lg:col-start-2">
        Gesuche...
      </FramedGridCard.Body.Col>
    </FramedGridCard.Body>
  )
}

RequestsView.propTypes = {
  project: PropTypes.object.isRequired,
}

export default RequestsView
