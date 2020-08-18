import PropTypes from 'prop-types'
import NLink from 'next/link'
import classnames from 'classnames'
import { Text, BTN_COLORS } from '../../atoms'
import { TEXT_TYPE } from '../Text/Text.atom'

export const ROUTE_TYPES = {
  text: 'text',
  button: 'button',
  icon: 'icon',
  svg: 'svg',
}

export const ROUTE_TEXT_COLORS = {
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
                {
                  'border-transparent': !active,
                  'border-b-2':
                    textType !== TEXT_TYPE.titleSm && textType !== TEXT_TYPE.titleMd && textType !== TEXT_TYPE.titleLg,
                  'border-b-3': textType === TEXT_TYPE.titleSm,
                  'border-b-4': textType === TEXT_TYPE.titleLg || textType === TEXT_TYPE.titleMd,
                },
                color(active)
              )}>
              <Text type={textType}>{children}</Text>
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
    case ROUTE_TYPES.button: {
      const IconComponent = icon
      return (
        <NLink href={href}>
          <a
            aria-label={ariaLabel}
            title={title}
            className={classnames(
              'group inline-block flex-shrink-0 text-center w-full py-4 text-lg font-semibold transition-shadow duration-150 ease-in-out rounded-full outline-none sm:px-8 sm:w-auto focus:outline-none',
              color,
              className
            )}>
            {icon ? (
              <span className="flex items-center justify-center">
                <IconComponent className="-ml-1" />
                <p className="ml-2">{children}</p>
              </span>
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
