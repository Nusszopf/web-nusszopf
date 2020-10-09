import React from 'react'
import PropTypes from 'prop-types'
import NLink from 'next/link'
import classnames from 'classnames'
import { BTN_COLORS, TEXT_TYPE } from '../../atoms'

export const ROUTE_TYPES = {
  text: 'text',
  button: 'button',
  buttonIconLeft: 'button icon left',
  buttonIconRight: 'button icon right',
  icon: 'icon',
  svg: 'svg',
}

export const ROUTE_TEXT_COLORS = {
  blue200: active => classnames('text-blue-200', { 'border-blue-200': active, 'hover:border-blue-200': !active }),
  yellow300: active =>
    classnames('text-yellow-300', { 'border-yellow-300': active, 'hover:border-yellow-300': !active }),
  gray700: active => classnames('text-gray-700', { 'border-gray-700': active, 'hover:border-gray-700': !active }),
  turquoise400: active =>
    classnames('text-turquoise-400', { 'border-turquoise-400': active, 'hover:border-turquoise-400': !active }),
}

const Route = ({
  children,
  href,
  ariaLabel,
  title,
  className,
  icon,
  textType = TEXT_TYPE.textSm,
  active = false,
  type = ROUTE_TYPES.text,
  color = type === ROUTE_TYPES.text ? ROUTE_TEXT_COLORS.gray700 : BTN_COLORS.whiteGray600,
}) => {
  switch (type) {
    case ROUTE_TYPES.text: {
      return (
        <NLink href={href}>
          <a className={classnames('cursor-pointer group', className)} href={href} title={title} aria-label={ariaLabel}>
            <span
              className={classnames(
                'inline-block',
                textType,
                {
                  'border-transparent': !active,
                  'border-b-2':
                    textType !== TEXT_TYPE.titleSm && textType !== TEXT_TYPE.titleMd && textType !== TEXT_TYPE.titleLg,
                  'border-b-3': textType === TEXT_TYPE.titleSm,
                  'border-b-4': textType === TEXT_TYPE.titleLg || textType === TEXT_TYPE.titleMd,
                },
                color(active)
              )}>
              {children}
            </span>
          </a>
        </NLink>
      )
    }
    case ROUTE_TYPES.svg: {
      return (
        <NLink href={href}>
          <a className={classnames('cursor-pointer', className)} href={href} title={title} aria-label={ariaLabel}>
            {children}
          </a>
        </NLink>
      )
    }
    case ROUTE_TYPES.buttonIconLeft:
    case ROUTE_TYPES.buttonIconRight:
    case ROUTE_TYPES.button: {
      const IconComponent = icon
      return (
        <NLink href={href}>
          <a
            aria-label={ariaLabel}
            title={title}
            className={classnames(
              'group inline-block text-center flex-shrink-0 py-4 text-lg font-semibold transition-shadow duration-150 ease-in-out rounded-full outline-none px-8 sm:w-auto focus:outline-none',
              color,
              className
            )}>
            {icon ? (
              <>
                {type === ROUTE_TYPES.buttonIconLeft && <IconComponent className="inline -mt-1 -ml-1" />}
                <span
                  className={classnames({
                    'ml-2': type === ROUTE_TYPES.buttonIconLeft,
                    'mr-2': type === ROUTE_TYPES.buttonIconRight,
                  })}>
                  {children}
                </span>
                {type === ROUTE_TYPES.buttonIconRight && <IconComponent className="inline -mt-1 -mr-1" />}
              </>
            ) : (
              <>{children}</>
            )}
          </a>
        </NLink>
      )
    }
    case ROUTE_TYPES.icon: {
      const IconComponent = icon
      return (
        <NLink href={href}>
          <a
            aria-label={ariaLabel}
            title={title}
            className={classnames(
              'cursor-pointer flex-shrink-0 inline-block transition-shadow flex items-center justify-center h-10 w-10 duration-150 ease-in-out rounded-full outline-none focus:outline-none',
              color,
              className
            )}>
            <IconComponent className="flex-shrink-0" />
          </a>
        </NLink>
      )
    }
  }
}

Route.propTypes = {
  active: PropTypes.bool,
  ariaLabel: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.values(ROUTE_TYPES)),
  icon: PropTypes.elementType,
  children: PropTypes.node,
  color: PropTypes.oneOf(Object.values({ ...ROUTE_TEXT_COLORS, ...BTN_COLORS })),
  className: PropTypes.string,
  textType: PropTypes.string,
}

export default Route
