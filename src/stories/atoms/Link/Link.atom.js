import PropTypes from 'prop-types'
import classnames from 'classnames'
import { BTN_COLORS } from '../../atoms'

export const LINK_TYPES = {
  text: 'text',
  button: 'button',
  svg: 'svg',
}

export const LINK_TEXT_COLORS = {
  gray700blue200: 'text-gray-700 bg-blue-200 border-blue-300 group-hover:bg-blue-300 group-hover:border-gray-700',
  yellow100red500: 'text-yellow-100 bg-red-500 border-yellow-100 group-hover:bg-red-600',
  yellow300pink700: 'text-yellow-300 bg-pink-700 border-yellow-300 group-hover:bg-gray-700',
  turquoise400turquoise800: 'text-turquoise-400 bg-turquoise-800 border-turquoise-400 group-hover:bg-black',
}

const Link = ({
  children,
  href,
  ariaLabel,
  className,
  title,
  icon,
  type = LINK_TYPES.text,
  color = type === LINK_TYPES.text ? LINK_TEXT_COLORS.gray700blue200 : BTN_COLORS.whiteGray600,
}) => {
  switch (type) {
    case LINK_TYPES.text: {
      return (
        <a
          className={classnames('cursor-pointer group', className)}
          href={href}
          rel="noopener noreferrer"
          target="_blank"
          title={title}
          aria-label={ariaLabel}>
          <span className={classnames('inline-block border-b-2', color)}>
            <span>{children}</span>
          </span>
        </a>
      )
    }
    case LINK_TYPES.svg: {
      return (
        <a
          className={classnames('cursor-pointer', className)}
          href={href}
          rel="noopener noreferrer"
          target="_blank"
          title={title}
          aria-label={ariaLabel}>
          {children}
        </a>
      )
    }
    case LINK_TYPES.button: {
      const IconComponent = icon
      return (
        <a
          href={href}
          rel="noopener noreferrer"
          target="_blank"
          aria-label={ariaLabel}
          title={title}
          className={classnames(
            'group flex-shrink-0 inline-block text-center py-4 text-lg font-semibold transition-shadow duration-150 ease-in-out rounded-full outline-none px-8 focus:outline-none',
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
      )
    }
  }
}

Link.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  children: PropTypes.node,
  type: PropTypes.oneOf(Object.values(LINK_TYPES)),
  color: PropTypes.oneOf(Object.values({ ...LINK_TEXT_COLORS, ...BTN_COLORS })),
  className: PropTypes.string,
}

export default Link
