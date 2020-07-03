import PropTypes from 'prop-types'
import styles from './text.module.scss'

const Text = ({ children, className, type }) => (
  <p type={type} className={className ? `${styles.text} ${className}` : styles.text}>
    {children}
  </p>
)

Text.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.string,
}

export default Text
