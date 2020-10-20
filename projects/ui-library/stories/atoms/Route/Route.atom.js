import React from 'react'
import PropTypes from 'prop-types'
import NLink from 'next/link'
import classnames from 'classnames'
import { Text, Button } from '../../atoms'
import { TextVariant } from '../Text/Text.theme'
import { ButtonColor } from '../Button/Button.theme'
import { RouterBorder, RouteColor, RouteVariant } from './Route.theme'

const Route = ({
  children,
  href,
  ariaLabel,
  as = 'span',
  border = RouterBorder.small,
  title,
  className,
  textVariant = 'textSm',
  active = false,
  variant = RouteVariant.text,
  color = 'gray700',
  ...props
}) => {
  switch (variant) {
    case RouteVariant.text: {
      return (
        <NLink href={href}>
          <a className={classnames('cursor-pointer group', className)} href={href} title={title} aria-label={ariaLabel}>
            <Text
              as={as}
              variant={textVariant}
              className={classnames(
                'inline-block',
                {
                  'border-transparent': !active,
                  'border-b-2': border === RouterBorder.small,
                  'border-b-3': border === RouterBorder.medium,
                  'border-b-4': border === RouterBorder.large,
                },
                RouteColor[color](active)
              )}>
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
            color={color}
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
  border: PropTypes.oneOf(Object.keys(RouterBorder)),
  children: PropTypes.node,
  color: PropTypes.oneOf([...Object.keys(RouteColor), ...Object.keys(ButtonColor)]),
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  textVariant: PropTypes.oneOf(Object.keys(TextVariant)),
  title: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(Object.keys(RouteVariant)),
}

export default Route
