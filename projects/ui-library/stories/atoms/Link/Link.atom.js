import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Button, Text } from '../../atoms'
import { ButtonColor, ButtonVariant } from '../Button/Button.theme'
import { TextVariant } from '../Text/Text.theme'
import { LinkColor, LinkBorder, LinkVariant, LinkType } from './Link.theme'

const Link = forwardRef(
  (
    {
      children,
      href,
      ariaLabel,
      className,
      title,
      variant = 'text',
      buttonVariant = 'filled',
      textVariant = 'textMd',
      color = 'steel',
      border = 'medium',
      type = 'url',
      ...props
    },
    ref
  ) => {
    switch (variant) {
      case LinkVariant.text: {
        return (
          <Text
            as="a"
            ref={ref}
            variant={textVariant}
            className={classnames(
              'cursor-pointer',
              {
                'border-b': border === LinkBorder.small,
                'border-b-2': border === LinkBorder.medium,
                'border-b-3': border === LinkBorder.large,
              },
              LinkColor[color],
              className
            )}
            href={encodeURI(href)}
            rel={type === LinkType.url ? 'noopener noreferrer' : null}
            target={type === LinkType.url ? '_blank' : null}
            title={title}
            aria-label={ariaLabel}
            {...props}>
            {children}
          </Text>
        )
      }
      case LinkVariant.svg: {
        return (
          <a
            ref={ref}
            className={classnames('cursor-pointer', className)}
            href={encodeURI(href)}
            rel="noopener noreferrer"
            target="_blank"
            title={title}
            aria-label={ariaLabel}
            {...props}>
            {children}
          </a>
        )
      }
      case LinkVariant.button: {
        return (
          <Button
            as="a"
            ref={ref}
            color={color}
            className={classnames('inline-block cursor-pointer', className)}
            href={encodeURI(href)}
            rel={type === LinkType.url ? 'noopener noreferrer' : null}
            target={type === LinkType.url ? '_blank' : null}
            title={title}
            aria-label={ariaLabel}
            variant={buttonVariant}
            {...props}>
            {children}
          </Button>
        )
      }
    }
  }
)

Link.displayName = 'Link'
Link.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  border: PropTypes.oneOf(Object.keys(LinkBorder)),
  className: PropTypes.string,
  color: PropTypes.oneOf([...Object.keys(LinkColor), ...Object.keys(ButtonColor)]),
  children: PropTypes.node,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(Object.keys(LinkVariant)),
  type: PropTypes.oneOf(Object.keys(LinkType)),
  textVariant: PropTypes.oneOf(Object.keys(TextVariant)),
  buttonVariant: PropTypes.oneOf(Object.keys(ButtonVariant)),
}

export default Link
