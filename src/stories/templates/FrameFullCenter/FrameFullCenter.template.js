import PropTypes from 'prop-types'
import classnames from 'classnames'

const FrameFullCenter = ({ fullScreen = true, children, className, flex, footer, ...props }) => (
  <div className={classnames('flex flex-col', { 'h-screen': fullScreen, 'h-full': !fullScreen }, className)} {...props}>
    <div
      className={classnames(
        'flex flex-1 px-6 pt-12 sm:px-16 lg:px-24 xl:px-32',
        {
          'mb-12': !footer,
        },
        { 'items-center justify-center': !flex },
        flex
      )}>
      {children}
    </div>
    {footer && <div className="pb-12">{footer}</div>}
  </div>
)

FrameFullCenter.propTypes = {
  fullScreen: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  footer: PropTypes.node,
  flex: PropTypes.string,
}

export default FrameFullCenter
