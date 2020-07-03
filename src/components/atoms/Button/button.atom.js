import PropTypes from 'prop-types'
import styles from './button.module.scss'

export const BUTTON_MENU = 'menu-button'

const Button = ({ mode, className, children, onClick, ...other }) => {
  return (
    <button
      className={className ? `${className} ${styles.button}` : styles.button}
      onClick={onClick}
      {...other}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  mode: PropTypes.string,
  className: PropTypes.string,
}

export default Button
