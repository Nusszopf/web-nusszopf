import PropTypes from 'prop-types'
import { logError } from '../../utils/services/error.service'
import ErrorPage from '../ErrorPage/ErrorPage'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    logError(`error-boundary: ${error.message} + ${errorInfo.componentStack}`)
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage />
    }
    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node,
}

export default ErrorBoundary
