import PropTypes from 'prop-types'
import classnames from 'classnames'

const FrameFullCenter = ({ children, className, flex, footer, ...props }) => (
  <div className={classnames('flex min-h-screen flex-col py-12 px-6 sm:px-16', className)} {...props}>
    <div className={classnames('flex flex-1', { 'items-center justify-center': !flex }, flex)}>{children}</div>
    {footer}
  </div>
)

FrameFullCenter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  footer: PropTypes.node,
  flex: PropTypes.string,
}

export default FrameFullCenter
