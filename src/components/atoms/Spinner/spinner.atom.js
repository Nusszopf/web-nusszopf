import PropTypes from 'prop-types'
import styles from './spinner.module.scss'

const Spinner = ({ className }) => <div className={`${styles.spinner} ${className}`}></div>

Spinner.propTypes = {
  className: PropTypes.string,
}

export default Spinner
