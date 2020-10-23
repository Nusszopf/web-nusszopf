import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Frame } from '../../templates'
import { Link } from '../../atoms'
import sponsorsData from './sponsors.data'

const FooterVariant = {
  row: 'row',
  col: 'col',
}

const Footer = ({ children, className, variant = FooterVariant.row }) => (
  <Frame as="footer" className={classnames('py-8 sm:py-0', className)}>
    <div
      className={classnames('flex justify-between items-center sm:h-24', {
        'flex-col sm:flex-row ': variant === FooterVariant.col,
      })}>
      {React.Children.map(children, child => (
        <>
          {child.type.displayName === 'Footer.LeftElement' &&
            React.cloneElement(child, {
              className: classnames({ 'flex justify-center': variant === FooterVariant.col }, child.props.className),
            })}
          {child.type.displayName === 'Footer.RightElement' &&
            React.cloneElement(child, {
              className: classnames(
                { 'flex justify-center items-center mt-6 sm:mt-0': variant === FooterVariant.col },
                child.props.className
              ),
            })}
        </>
      ))}
    </div>
  </Frame>
)

Footer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.oneOf(Object.keys(FooterVariant)),
}

Footer.LeftElement = ({ children, ...props }) => <div {...props}>{children}</div>
Footer.LeftElement.displayName = 'Footer.LeftElement'
Footer.LeftElement.propTypes = {
  children: PropTypes.string,
}

Footer.RightElement = ({ sponsors, children, ...props }) => (
  <div {...props}>
    {children}
    {sponsorsData.map(sponsor => (
      <>
        {sponsors.map(key => (
          <>
            {key === sponsor.key && (
              <Link
                className={key === 'auth0' && 'mr-4'}
                variant="svg"
                href={sponsor.href}
                title={sponsor.meta}
                ariaLabel={sponsor.meta}>
                <sponsor.logo className="w-32 h-full" />
              </Link>
            )}
          </>
        ))}
      </>
    ))}
  </div>
)
Footer.RightElement.displayName = 'Footer.RightElement'
Footer.RightElement.propTypes = {
  sponsors: PropTypes.array,
  children: PropTypes.string,
}

export default Footer
