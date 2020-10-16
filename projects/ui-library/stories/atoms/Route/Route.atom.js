import React from 'react'
import PropTypes from 'prop-types'
import NLink from 'next/link'
import classnames from 'classnames'
import { Text, Button } from '../../atoms'
import { TextStyle } from '../Text/Text.theme'
import { ButtonColor } from '../Button/Button.theme'
import { RouterBorder, RouteColor } from './Route.theme'

export const RouteType = {
  text: 'text',
  button: 'button',
  svg: 'svg',
}

const Route = ({
  children,
  href,
  ariaLabel,
  border = RouterBorder.small,
  title,
  className,
  textStyle = 'textSm',
  active = false,
  type = 'text',
  color = 'gray700',
  ...props
}) => {
  switch (type) {
    case RouteType.text: {
      return (
        <NLink href={href}>
          <a className={classnames('cursor-pointer group', className)} href={href} title={title} aria-label={ariaLabel}>
            <Text
              as="span"
              style={textStyle}
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
    case RouteType.svg: {
      return (
        <NLink href={href}>
          <a className={classnames('cursor-pointer', className)} href={href} title={title} aria-label={ariaLabel}>
            {children}
          </a>
        </NLink>
      )
    }
    case RouteType.button: {
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
  active: PropTypes.bool,
  ariaLabel: PropTypes.string.isRequired,
  border: PropTypes.oneOf(Object.keys(RouterBorder)),
  children: PropTypes.node,
  color: PropTypes.oneOf([...Object.keys(RouteColor), ...Object.keys(ButtonColor)]),
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  textStyle: PropTypes.oneOf(Object.keys(TextStyle)),
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.keys(RouteType)),
}

export default Route
