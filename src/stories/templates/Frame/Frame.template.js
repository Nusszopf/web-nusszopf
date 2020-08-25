import PropTypes from 'prop-types'
import classnames from 'classnames'

const Frame = ({ children, className, as = 'div', ...props }) => {
  const Component = as
  return (
    <Component className={classnames('px-6 sm:px-16 lg:px-24 xl:px-32', className)} {...props}>
      <div className="lg:container sm:max-w-xl sm:mx-auto">{children}</div>
    </Component>
  )
}

Frame.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  as: PropTypes.elementType,
}

export default Frame
