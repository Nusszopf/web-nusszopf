import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { usePopoverState, Popover, PopoverDisclosure, PopoverArrow } from 'reakit/Popover'
import { Info } from 'react-feather'
import { Text } from '../../atoms'
import { PopoverColor } from './Popover.theme'

const MyPopover = ({ color = 'lilac600', ...props }) => {
  const popover = usePopoverState()

  return (
    <div {...props}>
      <PopoverDisclosure {...popover} className="focus:outline-none">
        <Info className={classnames(PopoverColor[color].disclosure)} />
      </PopoverDisclosure>
      <Popover
        {...popover}
        aria-label="Info"
        className={classnames('box-border z-50 p-2 rounded-md focus:outline-none', PopoverColor[color].popover)}>
        <PopoverArrow
          {...popover}
          className={classnames('box-border bg-transparent fill-current', PopoverColor[color].arrow)}
        />
        <Text variant="textXs" className="italic">
          Welcome to Reakit!
        </Text>
      </Popover>
    </div>
  )
}

MyPopover.propTypes = {
  color: PropTypes.oneOf(Object.keys(PopoverColor)),
}

export default MyPopover
