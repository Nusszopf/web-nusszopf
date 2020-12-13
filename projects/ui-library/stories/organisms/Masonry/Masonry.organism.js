import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Masonry from 'react-masonry-css'

const breakpoints = {
  default: 2,
  1023: 1,
}

const MyMasonry = ({
  breakpointCols = breakpoints,
  children,
  className,
  columnClassName,
  gap = { wrap: '-ml-4', col: 'pl-4', row: 'mb-4' },
  itemClassName,
  ...props
}) => {
  return (
    <Masonry
      className={classnames('flex w-auto', gap.wrap, className)}
      columnClassName={classnames(gap.col, columnClassName)}
      breakpointCols={breakpointCols}
      {...props}>
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          key: child.id,
          className: classnames(gap.row, child.props.className, itemClassName),
        })
      )}
    </Masonry>
  )
}

MyMasonry.propTypes = {
  breakpointCols: PropTypes.number,
  children: PropTypes.node,
  className: PropTypes.string,
  columnClassName: PropTypes.string,
  gap: PropTypes.shape({
    wrap: PropTypes.string,
    col: PropTypes.string,
    row: PropTypes.string,
  }),
  itemClassName: PropTypes.string,
}

export default MyMasonry
