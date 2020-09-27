import PropTypes from 'prop-types'
import classnames from 'classnames'
import { BTN_COLORS } from '../../atoms'

export const LINK_TYPES = {
  text: 'text',
  button: 'button',
  buttonSmall: 'small button',
  svg: 'svg',
}

export const LINK_TEXT_COLORS = {
  gray700blue200: 'nz-link-gray700-blue200',
  yellow100red500: 'nz-link-yellow100-red500',
  yellow300pink700: 'nz-link-yellow300-pink700',
  turquoise400turquoise800: 'nz-link-turquoise400-turquoise800',
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
          <span className={classnames('inline-block border-b-2', color)}>{children}</span>
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
    case LINK_TYPES.buttonSmall:
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
            'group flex-shrink-0 inline-block text-center  text-lg font-semibold transition-shadow duration-150 ease-in-out rounded-full outline-none focus:outline-none',
            { 'py-4 px-8': type === LINK_TYPES.button, 'py-3 px-5': type === LINK_TYPES.buttonSmall },
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
