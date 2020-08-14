import PropTypes from 'prop-types'
import NLink from 'next/link'
import classnames from 'classnames'
import { Text, BTN_COLORS } from '../atoms'

// todo: size

export const NAVITEM_TYPES = {
  text: 'text',
  button: 'button',
}

export const NAVITEM_TEXT_COLORS = {
  gray700: active => ('text-gray-700', { 'border-gray-700': active, 'hover:border-gray-700': !active }),
}

const Link = ({
  children,
  href,
  ariaLabel,
  title,
  className,
  icon,
  active = false,
  type = NAVITEM_TYPES.text,
  color = type === NAVITEM_TYPES.text ? NAVITEM_TEXT_COLORS.gray700 : BTN_COLORS.whiteGray600,
}) => {
  switch (type) {
    case NAVITEM_TYPES.text: {
      return (
        <NLink href={href}>
          <a
            className={classnames('cursor-pointer group', className)}
            href={href}
            rel="noopener noreferrer"
            target="_blank"
            title={title}
            aria-label={ariaLabel}>
            <div className={classnames('border-b-2', { 'border-transparent': !active }, color(active))}>
              <Text>{children}</Text>
            </div>
          </a>
        </NLink>
      )
    }
    case NAVITEM_TYPES.button: {
      const IconComponent = icon
      return (
        <NLink href={href}>
          <a
            aria-label={ariaLabel}
            title={title}
            className={classnames(
              'cursor-pointer inline-block transition-shadow flex items-center justify-center h-12 w-12 duration-150 ease-in-out rounded-full outline-none focus:outline-none',
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

Link.propTypes = {
  active: PropTypes.bool,
  ariaLabel: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.values(NAVITEM_TYPES)),
  icon: PropTypes.elementType,
  children: PropTypes.node,
  color: PropTypes.oneOf(Object.values({ ...NAVITEM_TEXT_COLORS, ...BTN_COLORS })),
  className: PropTypes.string,
}

export default Link
