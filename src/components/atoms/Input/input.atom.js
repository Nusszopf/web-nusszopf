import PropTypes from 'prop-types'
import styles from './input.module.scss'

const Input = ({ aria, className, ...other }) => (
  <input
    className={className ? `${styles.input} ${className}` : styles.input}
    aria-label={aria}
    {...other}
  />
)

Input.propTypes = {
  aria: PropTypes.string,
  className: PropTypes.string,
}

export default Input
