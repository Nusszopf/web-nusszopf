import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Frame } from '../../templates'

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
Header.propTypes = { children: PropTypes.string, className: PropTypes.string }
Header.displayName = 'FramedGridCard.Header'
FramedGridCard.Header = Header

const BodyVariant = {
  twoCols: 'twoCols',
  twelveCols: 'twelveCols',
}

const Body = ({ className, children, variant = BodyVariant.twelveCols, ...props }) => (
  <div className={classnames('grid grid-cols-12 gap-2 py-16 rounded-b-lg', className)} {...props}>
    {React.Children.map(children, (child, index) =>
      React.cloneElement(child, {
        className: classnames(
          {
            'col-span-12 lg:col-span-5': variant === BodyVariant.twoCols,
            'lg:col-start-2': index % 2 === 0,
          },
          child.props.className
        ),
      })
    )}
  </div>
)
Body.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.oneOf(Object.keys(BodyVariant)),
}
Body.displayName = 'FramedGridCard.Body'
FramedGridCard.Body = Body

const Col = ({ children, ...props }) => <div {...props}>{children}</div>
Col.propTypes = { children: PropTypes.node }
Col.displayName = 'FramedGridCard.Body.Col'
FramedGridCard.Body.Col = Col

export default FramedGridCard
