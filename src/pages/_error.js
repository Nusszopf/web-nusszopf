import PropTypes from 'prop-types'
import { Page } from '../components/molecules'
import { Heading } from '../components/atoms'

const CustomError = ({ statusCode }) => (
  <Page noindex={true}>
    <Heading>Ein Fehler {statusCode} ist aufgetreten</Heading>
  </Page>
)

CustomError.propTypes = {
  statusCode: PropTypes.string,
}

CustomError.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default CustomError
