import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Link from 'next/link'
import { ChevronDown } from 'react-feather'
import { Menu, MenuButton, MenuList, MenuItem } from '@reach/menu-button'

import { Button, Text } from '../../atoms'
import { MenuColor, MenuVariant } from './Menu.theme'

const MyMenu = ({ label, items, color = 'lilac700', variant = 'icon', ...props }) => {
  return (
    <Menu>
      {variant === MenuVariant.button && (
        <Button as={MenuButton} iconRight={<ChevronDown className="m-1 -mr-2" />} {...props}>
          {label}
        </Button>
      )}
      {variant === MenuVariant.icon && (
        <MenuButton className="m-4 focus:outline-none" {...props}>
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
                      <Text as="span" variant="textSm">
                        {item.text}
                      </Text>
                    </a>
                  </Link>
                </MenuItem>
              )}
              {item?.seperator && <div className="w-full h-px my-2 bg-white opacity-25"></div>}
              {item.type === 'button' && (
                <MenuItem
                  className={classnames(MenuColor[color].item)}
                  onSelect={() => {
                    item.action()
                  }}>
                  <Text as="span" variant="textSm">
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
  items: PropTypes.array.isRequired,
  label: PropTypes.node,
  initialFocus: PropTypes.number,
  color: PropTypes.oneOf(Object.keys(MenuColor)),
  variant: PropTypes.oneOf(Object.keys(MenuVariant)),
}

export default MyMenu
