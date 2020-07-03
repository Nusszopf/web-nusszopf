import Link from 'next/link'
import PropTypes from 'prop-types'
import styles from './link.module.scss'

export const LINK_EXTERN = 'link-extern'
export const LINK_INTERN = 'link-intern'
export const LINK_MENU_INTERN = 'link-menu-intern'
export const LINK_MENU_EXTERN = 'link-menu-extern'
export const LINK_BUTTON_INTERN = 'link-button-intern'
export const LINK_BUTTON_EXTERN = 'link-button-extern'
export const LINK_BUTTON_ICON_INTERN = 'link-button-icon-intern'

const CustomLink = ({ mode, href, as, className, children, ...other }) => {
  // const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))
  switch (mode) {
    case LINK_BUTTON_EXTERN:
      return (
        <a
          className={className ? `${styles.buttonLink} ${className}` : styles.buttonLink}
          href={href}
          {...other}>
          {children}
        </a>
      )
    case LINK_BUTTON_INTERN:
      return (
        <Link href={href} as={as}>
          <a
            className={className ? `${styles.buttonLink} ${className}` : styles.buttonLink}
            {...other}>
            {children}
          </a>
        </Link>
      )
    case LINK_BUTTON_ICON_INTERN:
      return (
        <Link href={href} as={as}>
          <a
            className={className ? `${styles.buttonIconLink} ${className}` : styles.buttonIconLink}
            {...other}>
            {children}
          </a>
        </Link>
      )
    case LINK_MENU_EXTERN:
      return (
        <a
          className={className ? `${styles.menuLink} ${className}` : styles.menuLink}
          href={href}
          {...other}>
          {children}
        </a>
      )
    case LINK_MENU_INTERN:
      return (
        <Link href={href} as={as}>
          <a className={className ? `${styles.menuLink} ${className}` : styles.menuLink} {...other}>
            {children}
          </a>
        </Link>
      )
    case LINK_EXTERN:
      return (
        <a
          className={className ? `${styles.link} ${className}` : styles.link}
          href={href}
          {...other}>
          {children}
        </a>
      )
    default:
      return (
        <Link href={href} as={as}>
          <a className={className ? `${styles.link} ${className}` : styles.link} {...other}>
            {children}
          </a>
        </Link>
      )
  }
}

CustomLink.propTypes = {
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
  children: PropTypes.node,
  mode: PropTypes.string,
}

export default CustomLink
