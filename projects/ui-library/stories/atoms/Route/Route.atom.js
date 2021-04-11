import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import NLink from 'next/link'
import classnames from 'classnames'
import { Text, Button } from '../../atoms'
import { TextVariant } from '../Text/Text.theme'
import { RouteBorder, RouteVariant } from './Route.theme'

const Route = forwardRef(
  (
    {
      active = false,
      ariaLabel,
      border = RouteBorder.small,
      className,
      children,
      href,
      textVariant = 'textSm',
      title,
      variant = RouteVariant.text,
      ...props
    },
    ref
  ) => {
    switch (variant) {
      case RouteVariant.text: {
        return (
          <NLink href={href} ref={ref}>
            <Text
              as="a"
              className={classnames(
                'cursor-pointer text-current active:border-current hover:border-current',
                {
                  'border-b-2': border === RouteBorder.small,
                  'border-b-3': border === RouteBorder.medium,
                  'border-b-4': border === RouteBorder.large,
                },
                className
              )}
              href={href}
              title={title}
              aria-label={ariaLabel}
              active={active ? 'true' : 'false'}
              variant={textVariant}
              {...props}>
              {children}
            </Text>
          </NLink>
        )
      }
      case RouteVariant.svg: {
        return (
          <NLink href={href} ref={ref}>
            <a
              className={classnames('cursor-pointer', className)}
              href={href}
              title={title}
              aria-label={ariaLabel}
              {...props}>
              {children}
            </a>
          </NLink>
        )
      }
      case RouteVariant.button: {
        return (
          <NLink href={href} ref={ref}>
            <Button
              as="a"
              className={classnames('inline-block', className)}
              aria-label={ariaLabel}
              title={title}
              {...props}>
              {children}
            </Button>
          </NLink>
        )
      }
    }
  }
)

Route.displayName = 'Route'
Route.propTypes = {
  active: PropTypes.bool,
  ariaLabel: PropTypes.string.isRequired,
  border: PropTypes.oneOf(Object.keys(RouteBorder)),
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  textVariant: PropTypes.oneOf(Object.keys(TextVariant)),
  title: PropTypes.string,
  variant: PropTypes.oneOf(Object.keys(RouteVariant)),
}

export default Route
