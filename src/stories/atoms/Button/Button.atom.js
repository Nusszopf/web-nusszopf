import PropTypes from 'prop-types'
import classnames from 'classnames'
// todo: icon
// todo: size

export const BTN_COLORS = {
  whiteGray600: 'text-white bg-gray-600 hover:shadow-outline:gray-600 focus:shadow-outline:gray-600',
  blue400Yellow300: 'text-blue-400 bg-yellow-300 hover:shadow-outline:yellow-300 focus:shadow-outline:yellow-300',
  pink400blue700: 'text-pink-400 bg-blue-700 hover:shadow-outline:blue-700 focus:shadow-outline:blue-700',
  yellow400pink600: 'text-pink-600 bg-yellow-400 hover:shadow-outline:yellow-400 focus:shadow-outline:yellow-600',
  yellow400yellow700: 'text-yellow-400 bg-yellow-700 hover:shadow-outline:yellow-700 focus:shadow-outline:yellow-700',
  turquoise700turquoise500:
    'text-turquoise-700 bg-turquoise-600 hover:shadow-outline:turquoise-600-bright focus:shadow-outline:turquoise-600-bright',
  blue400blue200: 'text-blue-400 bg-blue-200 hover:shadow-outline:blue-200 focus:shadow-outline:blue-200',
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
