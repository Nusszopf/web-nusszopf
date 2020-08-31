import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Square, CheckSquare } from 'react-feather'
import { TEXT_TYPE } from '../../atoms'

const Checkbox = ({ disabled = false, checked = false, label, className = 'text-black', ...props }) => (
  <label>
    <input type="checkbox" disabled={disabled} className="hidden" {...props} />
    <span
      className={classnames('inline-flex cursor-pointer', {
        'opacity-50 cursor-not-allowed': disabled,
      })}>
      {!checked && <Square className={classnames('mt-px', className)} />}
      {checked && <CheckSquare className={classnames('mt-px', className)} />}
      <span className={classnames('ml-2', TEXT_TYPE.textSm, className)}>{label}</span>
    </span>
  </label>
)

Checkbox.propTypes = {
  disabled: PropTypes.bool,
  checked: PropTypes.bool.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.string,
}

export default Checkbox
