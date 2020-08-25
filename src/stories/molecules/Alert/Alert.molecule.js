import { Loader, CheckCircle, XCircle, Info } from 'react-feather'
import classnames from 'classnames'
import PropTypes from 'prop-types'

export const ALERT_TYPES = {
  error: 'error',
  success: 'success',
  info: 'info',
  loading: 'loading',
}

export const ALERT_COLORS = {
  blue100blue400: 'text-blue-100 bg-blue-600',
}

const Alert = ({ type = ALERT_TYPES.info, text, className, color = ALERT_COLORS.blue100blue400 }) => (
  <div className={classnames('flex p-5 text-lg rounded-lg', color, className)}>
    {type === ALERT_TYPES.success && <CheckCircle className="flex-shrink-0 mt-px" />}
    {type === ALERT_TYPES.error && <XCircle className="flex-shrink-0 mt-px" />}
    {type === ALERT_TYPES.info && <Info className="flex-shrink-0 mt-px" />}
    {type === ALERT_TYPES.loading && <Loader className="flex-shrink-0 mt-px animate-spin" />}
    <p className="ml-3">{text}</p>
  </div>
)

Alert.propTypes = {
  type: PropTypes.oneOf(Object.values(ALERT_TYPES)),
  text: PropTypes.string,
  color: PropTypes.oneOf(Object.values(ALERT_COLORS)),
  className: PropTypes.string,
}

export default Alert
