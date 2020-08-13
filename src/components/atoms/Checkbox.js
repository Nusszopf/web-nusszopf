import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Square, CheckSquare } from 'react-feather'
import { Text, TEXT_TYPE } from '../atoms'

const Checkbox = ({ disabled, checked, label, className = 'text-black', ...props }) => (
  <label>
    <input type="checkbox" disabled={disabled} className="hidden" {...props} />
    <span
      className={classnames('inline mt-4 align-middle cursor-pointer', {
        'opacity-50 cursor-not-allowed': disabled,
      })}>
      {!checked && <Square className={classnames('inline', className)} />}
      {checked && <CheckSquare className={classnames('inline', className)} />}
      <Text type={TEXT_TYPE.textSm} className={classnames('inline ml-2 align-middle', className)}>
        {label}
      </Text>
    </span>
  </label>
)

Checkbox.propTypes = {
  disabled: PropTypes.bool.isRequired,
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default Checkbox
