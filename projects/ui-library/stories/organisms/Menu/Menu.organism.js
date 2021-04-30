import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { useMenuState, Menu, MenuButton, MenuItem } from 'reakit/Menu'

import { Text } from '../../atoms'
import { MenuColor } from './Menu.theme'

const MyMenu = ({ ariaLabel, label, items, color = 'lilac', className, innerClassName, ...props }) => {
  const menu = useMenuState({ placement: 'bottom-end', animated: 150 })

  const handleClick = action => {
    menu.hide()
    action()
  }

  return (
    <>
      <MenuButton {...menu} className={classnames('focus:outline-none my-3')} aria-label={ariaLabel} {...props}>
        <div className={className}>{label}</div>
      </MenuButton>
      <Menu {...menu} tabIndex={0} aria-label={ariaLabel} className="z-10 focus:outline-none reakit-animate-scale">
        <div className={classnames('rounded-md shadow-md', MenuColor[color].menu, innerClassName)}>
          {items.map((item, index) => (
            <MenuItem
              key={`menu-${index}`}
              data-test={`menuitem-${index}`}
              type="button"
              {...menu}
              className={classnames(
                MenuColor[color].item,
                'whitespace-nowrap w-full py-1 px-4 text-left focus:outline-none'
              )}
              onClick={() => handleClick(item.action)}>
              <Text variant="textSmMedium">{item.text}</Text>
            </MenuItem>
          ))}
        </div>
      </Menu>
    </>
  )
}

MyMenu.propTypes = {
  ariaLabel: PropTypes.string,
  items: PropTypes.array.isRequired,
  label: PropTypes.node,
  className: PropTypes.string,
  innerClassName: PropTypes.string,
  color: PropTypes.oneOf(Object.keys(MenuColor)),
}

export default MyMenu
