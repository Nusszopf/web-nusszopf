import React from 'react'
import PropTypes from 'prop-types'
import NLink from 'next/link'
import classnames from 'classnames'
import { Text, Button } from '../../atoms'
import { TextVariant } from '../Text/Text.theme'
import { RouteBorder, RouteVariant } from './Route.theme'

const Route = ({
  as = 'span',
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
}) => {
  switch (variant) {
    case RouteVariant.text: {
      return (
        <NLink href={href}>
          <a className={classnames('cursor-pointer group', className)} href={href} title={title} aria-label={ariaLabel}>
            <Text
              as={as}
              active={active ? 'true' : 'false'}
              variant={textVariant}
              className={classnames('inline-block text-current active:border-current hover:border-current', {
                'border-b-2': border === RouteBorder.small,
                'border-b-3': border === RouteBorder.medium,
                'border-b-4': border === RouteBorder.large,
              })}>
              {children}
            </Text>
          </a>
        </NLink>
      )
    }
    case RouteVariant.svg: {
      return (
        <NLink href={href}>
          <a className={classnames('cursor-pointer', className)} href={href} title={title} aria-label={ariaLabel}>
            {children}
          </a>
        </NLink>
      )
    }
    case RouteVariant.button: {
      return (
        <NLink href={href}>
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

Route.propTypes = {
  as: PropTypes.string,
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
