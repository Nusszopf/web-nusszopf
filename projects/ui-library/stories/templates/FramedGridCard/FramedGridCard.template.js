import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Frame } from '../../templates'
import { BodyGap, ColVariant } from './FramedGridCard.theme'

const FramedGridCard = ({ children, className, headerColor, bodyColor }) => (
  <div className={className}>
    {React.Children.map(children, child => (
      <>
        {child.type.displayName === 'FramedGridCard.Header' && (
          <Frame className={headerColor}>{React.cloneElement(child)}</Frame>
        )}
        {child.type.displayName === 'FramedGridCard.Body' && (
          <Frame className={bodyColor}>{React.cloneElement(child)}</Frame>
        )}
      </>
    ))}
  </div>
)
FramedGridCard.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  headerColor: PropTypes.string,
  bodyColor: PropTypes.string,
}

const Header = ({ className, children, ...props }) => (
  <div className={classnames('grid grid-cols-12 gap-2 py-5 bg-grey-200 rounded-t-lg', className)} {...props}>
    <div className={classnames('col-span-12 lg:col-span-10 lg:col-start-2 ', className)} {...props}>
      {children}
    </div>
  </div>
)
Header.propTypes = { children: PropTypes.node, className: PropTypes.string }
Header.displayName = 'FramedGridCard.Header'
FramedGridCard.Header = Header

const Body = ({ className, children, gap = BodyGap.small, ...props }) => (
  <div
    className={classnames(
      'grid grid-cols-12 py-12 md:py-16 rounded-b-lg',
      { 'gap-2': gap === BodyGap.small, 'gap-4': gap === BodyGap.medium, 'gap-6': gap === BodyGap.large },
      className
    )}
    {...props}>
    {children}
  </div>
)
Body.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  gap: PropTypes.oneOf(Object.keys(BodyGap)),
}
Body.displayName = 'FramedGridCard.Body'
FramedGridCard.Body = Body

const Col = ({ children, className, variant = ColVariant.twelveCols, ...props }) => (
  <div
    className={classnames(className, {
      'col-span-12 lg:col-span-5': variant === ColVariant.twoCols,
      'col-span-12 lg:col-span-10 lg:col-start-2': variant === ColVariant.oneCol,
    })}
    {...props}>
    {children}
  </div>
)
Col.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf(Object.keys(ColVariant)),
}
Col.displayName = 'FramedGridCard.Body.Col'
FramedGridCard.Body.Col = Col

export default FramedGridCard
