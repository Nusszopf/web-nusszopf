import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Button, Text } from '../../atoms'
import { ButtonColor, ButtonVariant } from '../Button/Button.theme'
import { TextVariant } from '../Text/Text.theme'
import { LinkColor, LinkBorder, LinkVariant } from './Link.theme'

const Link = ({
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
  ...props
}) => {
  switch (variant) {
    case LinkVariant.text: {
      return (
        // eslint-disable-next-line react/jsx-no-target-blank
        <a
          className={classnames('cursor-pointer group', className)}
          href={href}
          rel={!props?.download ? 'noopener noreferrer' : ''}
          target={!props?.download ? '_blank' : ''}
          title={title}
          aria-label={ariaLabel}
          {...props}>
          <Text
            as="span"
            variant={textVariant}
            className={classnames(
              'inline-block',
              {
                'border-b': border === LinkBorder.small,
                'border-b-2': border === LinkBorder.medium,
                'border-b-3': border === LinkBorder.large,
              },
              LinkColor[color]
            )}>
            {children}
          </Text>
        </a>
      )
    }
    case LinkVariant.svg: {
      return (
        <a
          className={classnames('cursor-pointer', className)}
          href={href}
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
          color={color}
          className={classnames('inline-block cursor-pointer', className)}
          href={href}
          rel="noopener noreferrer"
          target="_blank"
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

Link.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  border: PropTypes.oneOf(Object.keys(LinkBorder)),
  className: PropTypes.string,
  color: PropTypes.oneOf([...Object.keys(LinkColor), ...Object.keys(ButtonColor)]),
  children: PropTypes.node,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(Object.keys(LinkVariant)),
  textVariant: PropTypes.oneOf(Object.keys(TextVariant)),
  buttonVariant: PropTypes.oneOf(Object.keys(ButtonVariant)),
}

export default Link
