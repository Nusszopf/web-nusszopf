import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Link from 'next/link'
import { ChevronDown } from 'react-feather'
import { useMenuState, Menu, MenuItem, MenuButton } from 'reakit/Menu'
import { Button, Text } from '../../atoms'
import { MenuColor } from './Menu.theme'

const MyMenu = ({ label, items, color = 'gray200', initialFocus = 0, ...props }) => {
  const menu = useMenuState()
  const ref = useRef([])

  useEffect(() => {
    if (menu.visible) {
      ref.current[initialFocus].focus()
    }
  }, [menu.visible, initialFocus])

  return (
    <div className="max-w-content">
      <MenuButton as={Button} iconRight={<ChevronDown className="mt-1 -mr-2" />} {...menu} {...props}>
        {label}
      </MenuButton>
      <Menu
        {...menu}
        aria-label="Menu"
        className={classnames(
          'z-50 flex flex-col py-2 mt-2 overflow-hidden rounded-md focus:outline-none',
          MenuColor[color].menu
        )}>
        <>
          {items.map((item, index) => (
            <>
              {item.type === 'link' && (
                <MenuItem as={Link} key={`menu-${index}`} href={item.href} {...menu}>
                  <a
                    ref={el => (ref.current[index] = el)}
                    className={classnames('px-5 py-1 text-left focus:outline-none', MenuColor[color].item)}>
                    <Text as="span" variant="textSm">
                      {item.text}
                    </Text>
                  </a>
                </MenuItem>
              )}
              {item.type === 'button' && (
                <MenuItem
                  ref={el => (ref.current[index] = el)}
                  className={classnames('px-5 py-1 text-left focus:outline-none', MenuColor[color].item)}
                  key={`menu-${index}`}
                  onClick={() => {
                    item.action()
                    menu.hide()
                  }}
                  {...menu}>
                  <Text as="span" variant="textSm">
                    {item.text}
                  </Text>
                </MenuItem>
              )}
            </>
          ))}
        </>
      </Menu>
    </div>
  )
}

MyMenu.propTypes = {
  items: PropTypes.array.isRequired,
  label: PropTypes.string,
  initialFocus: PropTypes.number,
  color: PropTypes.oneOf(Object.keys(MenuColor)),
}

export default MyMenu
