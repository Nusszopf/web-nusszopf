import PropTypes from 'prop-types'
import classnames from 'classnames'

export const INPUT_COLORS = {
  yellow300blue400:
    'text-yellow-300 placeholder-yellow-300 bg-blue-400 border-yellow-300 hover:shadow-outline:yellow-300 focus:placeholder-blue-400 focus:shadow-outline:yellow-300',
}

const Input = ({ disabled = false, color = INPUT_COLORS.yellow300blue400, className, ...props }) => (
  <input
    className={classnames(
      'inline-block w-full px-5 py-4 text-lg transition-shadow duration-150 ease-in-out border-3 rounded-lg shadow-xs appearance-none focus:outline-none ',
      color,
      className,
      { 'opacity-50 cursor-not-allowed': disabled }
    )}
    disabled={disabled}
    {...props}
  />
)

Input.propTypes = {
  color: PropTypes.oneOf(Object.values(INPUT_COLORS)),
  disabled: PropTypes.bool,
  className: PropTypes.string,
}

export default Input
