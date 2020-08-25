import PropTypes from 'prop-types'
import classnames from 'classnames'
// todo: icon
// todo: size

export const BTN_COLORS = {
  whiteGray600: 'btn-white-gray600',
  blue400Yellow300: 'btn-blue400-yellow300',
  pink400blue700: 'btn-pink400-blue700',
  pink600yellow300: 'btn-pink600-yellow300',
  yellow400yellow700: 'btn-yellow400-yellow700 ',
  turquoise700turquoise500: 'btn-turquoise-700turquoise600',
  blue400blue200: 'btn-blue400-blue200',
}

const Button = ({ className, color = BTN_COLORS.whiteGray600, label, ...props }) => (
  <button
    className={classnames(
      'flex-shrink-0 py-4 text-lg font-semibold transition-shadow duration-150 ease-in-out rounded-full outline-none px-8 sm:w-auto focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed',
      color,
      className
    )}
    {...props}>
    {label}
  </button>
)

Button.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  label: PropTypes.string.isRequired,
}

export default Button
