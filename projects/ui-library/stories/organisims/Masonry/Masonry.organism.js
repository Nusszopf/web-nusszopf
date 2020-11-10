import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Masonry from 'react-masonry-css'

const breakpoints = {
  default: 2,
  1024: 1,
}

const MyMasonry = ({ children, className, columnClassName, itemClassName, breakpointCols = breakpoints, ...props }) => {
  return (
    <Masonry
      className={classnames('flex w-auto -ml-4', className)}
      columnClassName={classnames('pl-4', columnClassName)}
      breakpointCols={breakpointCols}
      {...props}>
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          key: child.id,
          className: classnames('mb-4', child.props.className, itemClassName),
        })
      )}
    </Masonry>
  )
}

MyMasonry.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  columnClassName: PropTypes.string,
  itemClassName: PropTypes.string,
  breakpointCols: PropTypes.number,
}

export default MyMasonry
