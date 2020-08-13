import PropTypes from 'prop-types'
import { logError } from '../../../utils/services/error.service'

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
      return <p>error boundary works!</p>
    }
    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node,
}

export default ErrorBoundary
