import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Link from 'next/link'
import { ChevronDown } from 'react-feather'
import { Menu, MenuButton, MenuList, MenuItem } from '@reach/menu-button'

import { Button, Text } from '../../atoms'
import { MenuColor, MenuVariant } from './Menu.theme'

const MyMenu = ({ ariaLabel, label, items, color = 'lilac', variant = 'icon', className, ...props }) => {
  return (
    <Menu>
      {variant === MenuVariant.button && (
        <Button
          as={MenuButton}
          aria-label={ariaLabel}
          iconRight={<ChevronDown className="m-1 -mr-2" />}
          className={className}
          {...props}>
          {label}
        </Button>
      )}
      {variant === MenuVariant.icon && (
        <MenuButton aria-label={ariaLabel} className={classnames('focus:outline-none mb-2 ml-4', className)} {...props}>
          {label}
        </MenuButton>
      )}
      <MenuList aria-label="Menu" className={classnames(MenuColor[color].menu)}>
        <>
          {items.map((item, index) => (
            <React.Fragment key={`menu-${index}`}>
              {item.type === 'link' && (
                <MenuItem className={classnames(MenuColor[color].item)} onSelect={() => {}}>
                  <Link href={item.href}>
                    <a>
                      <Text as="span" variant="textSmMedium">
                        {item.text}
                      </Text>
                    </a>
                  </Link>
                </MenuItem>
              )}
              {item.type === 'button' && (
                <MenuItem
                  className={classnames(MenuColor[color].item)}
                  onSelect={() => {
                    item.action()
                  }}>
                  <Text as="span" variant="textSmMedium">
                    {item.text}
                  </Text>
                </MenuItem>
              )}
            </React.Fragment>
          ))}
        </>
      </MenuList>
    </Menu>
  )
}

MyMenu.propTypes = {
  ariaLabel: PropTypes.string,
  items: PropTypes.array.isRequired,
  label: PropTypes.node,
  className: PropTypes.string,
  initialFocus: PropTypes.number,
  color: PropTypes.oneOf(Object.keys(MenuColor)),
  variant: PropTypes.oneOf(Object.keys(MenuVariant)),
}

export default MyMenu
