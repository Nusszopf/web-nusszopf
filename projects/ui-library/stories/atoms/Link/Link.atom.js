import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Button, Text } from '../../atoms'
import { ButtonColor } from '../Button/Button.theme'
import { TextStyle } from '../Text/Text.theme'
import { LinkColor, LinkBorder } from './Link.theme'

export const LinkType = {
  button: 'button',
  text: 'text',
  svg: 'svg',
}

const Link = ({
  children,
  href,
  ariaLabel,
  className,
  title,
  type = LinkType.text,
  textStyle = 'textMd',
  color = 'gray700Blue200',
  border = LinkBorder.medium,
  ...props
}) => {
  switch (type) {
    case LinkType.text: {
      return (
        <a
          className={classnames('cursor-pointer group', className)}
          href={href}
          rel="noopener noreferrer"
          target="_blank"
          title={title}
          aria-label={ariaLabel}
          {...props}>
          <Text
            as="span"
            style={textStyle}
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
    case LinkType.svg: {
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
    case LinkType.button: {
      return (
        <Button
          as="a"
          color={color}
          className={classnames('cursor-pointer', className)}
          href={href}
          rel="noopener noreferrer"
          target="_blank"
          title={title}
          aria-label={ariaLabel}
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
  type: PropTypes.oneOf(Object.keys(LinkType)),
  textStyle: PropTypes.oneOf(Object.keys(TextStyle)),
}

export default Link