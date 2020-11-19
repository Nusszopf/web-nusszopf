import PropTypes from 'prop-types'
import { ErrorPage } from '~/components'

const CustomError = ({ statusCode }) => <ErrorPage statusCode={statusCode} />

CustomError.propTypes = {
  statusCode: PropTypes.string,
}

CustomError.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default CustomError
