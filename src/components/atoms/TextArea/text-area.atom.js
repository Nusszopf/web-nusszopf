import PropTypes from 'prop-types'
import styles from './text-area.module.scss'

const TextArea = ({ className, aria, ...other }) => (
  <textarea
    className={className ? `${styles.textarea} ${className}` : styles.textarea}
    aria-label={aria}
    {...other}></textarea>
)

TextArea.propTypes = {
  aria: PropTypes.string,
  className: PropTypes.string,
}
export default TextArea
