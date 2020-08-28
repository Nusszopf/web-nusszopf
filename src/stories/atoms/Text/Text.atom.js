import PropTypes from 'prop-types'
import classnames from 'classnames'

export const TEXT_TYPE = {
  titleLg: 'nz-title-lg',
  titleMd: 'nz-title-md',
  titleSm: 'nz-title-sm',
  textXl: 'nz-text-xl',
  textLg: 'nz-text-lg',
  textMd: 'nz-text-md',
  textSm: 'nz-text-sm',
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
