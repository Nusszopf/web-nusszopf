import PropTypes from 'prop-types'
import classnames from 'classnames'

const FrameFullCenter = ({ children, className, footer, ...props }) => (
  <div className={classnames('flex min-h-full flex-col px-6 sm:px-16', className)} {...props}>
    <div className="flex items-center justify-center flex-1">{children}</div>
    {footer}
  </div>
)

FrameFullCenter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  footer: PropTypes.node,
}

export default FrameFullCenter
