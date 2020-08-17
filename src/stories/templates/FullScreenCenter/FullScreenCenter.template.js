import PropTypes from 'prop-types'
import classnames from 'classnames'

const FullScreenCenter = ({ children, className, ...props }) => (
  <div className={classnames('flex items-center justify-center h-screen px-6 py-12 sm:px-16', className)} {...props}>
    {children}
  </div>
)

FullScreenCenter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default FullScreenCenter
