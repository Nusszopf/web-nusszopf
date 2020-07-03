import PropTypes from 'prop-types'
import { Heading, Text, Link } from '../../atoms'
import { LINK_BUTTON_INTERN, LINK_EXTERN } from '../../atoms/Link/link.atom'
import { logError } from '../../../utils/services/error.service'
import styles from './error-boundary.module.scss'

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
      return (
        <div className={styles.container}>
          <Heading>Sorry!</Heading>
          <Text>Es ist ein technisches Problem aufgetreten.</Text>
          <Text>
            Bitte melde dich bei uns falls der Fehler erneut auftritt unter{' '}
            <Link mode={LINK_EXTERN} href="mailto:mail@nusszopf.org">
              mail@nusszopf.org
            </Link>
            .
          </Text>
          <Link mode={LINK_BUTTON_INTERN} href={this.props.errorRef ?? '/'}>
            Okay
          </Link>
        </div>
      )
    }
    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node,
  errorRef: PropTypes.string,
}

export default ErrorBoundary
