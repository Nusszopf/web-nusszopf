import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { usePopoverState, Popover, PopoverDisclosure, PopoverArrow } from 'reakit/Popover'
import { Info } from 'react-feather'
import { Text } from '../../atoms'
import { PopoverColor } from './Popover.theme'

const MyPopover = ({ color = 'lilac600', children, ...props }) => {
  const popover = usePopoverState({ placement: 'top' })

  return (
    <div {...props}>
      <PopoverDisclosure {...popover} className="focus:outline-none">
        <Info className={classnames(PopoverColor[color].disclosure)} />
      </PopoverDisclosure>
      <Popover
        {...popover}
        aria-label="Info"
        className={classnames(
          'box-border z-50 p-2 rounded-md focus:outline-none max-w-xs',
          PopoverColor[color].popover
        )}>
        <PopoverArrow
          {...popover}
          className={classnames('box-border bg-transparent fill-current', PopoverColor[color].arrow)}
        />
        <Text variant="textXs" className="italic">
          {children}
        </Text>
      </Popover>
    </div>
  )
}

MyPopover.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(Object.keys(PopoverColor)),
}

export default MyPopover
