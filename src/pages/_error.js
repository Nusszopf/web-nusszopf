import PropTypes from 'prop-types'

const CustomError = ({ statusCode }) => <p>error {statusCode} page works!</p>

CustomError.propTypes = {
  statusCode: PropTypes.string,
}

CustomError.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default CustomError
