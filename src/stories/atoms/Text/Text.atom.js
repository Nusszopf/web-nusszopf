import PropTypes from 'prop-types'
import classnames from 'classnames'

export const TEXT_TYPE = {
  titleLg: 'text-4xl font-semibold leading-tight',
  titleMd: 'text-3xl font-bold leading-tight',
  titleSm: 'text-xl font-bold leading-snug',
  textXl: 'text-2xl font-semibold leading-snug',
  textLg: 'text-2xl font-medium leading-snug',
  textMd: 'text-xl font-medium leading-snug',
  textSm: 'text-lg',
}

const Text = ({ as = 'p', children, className, type = TEXT_TYPE.textMd, ...props }) => {
  const Component = as
  return (
    <Component className={classnames(type, className)} {...props}>
      {children}
    </Component>
  )
}

Text.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
}

export default Text
