import React from 'react'
import PropTypes from 'prop-types'

import { usePopoverState, Popover, PopoverDisclosure, PopoverArrow } from 'reakit/Popover'
import { Info } from 'react-feather'
import { Text } from '../../atoms'

const MyPopover = ({ children, ...props }) => {
  const popover = usePopoverState({ placement: 'top' })

  return (
    <div {...props}>
      <PopoverDisclosure {...popover} className="focus:outline-none text-livid-500">
        <Info />
      </PopoverDisclosure>
      <Popover
        {...popover}
        aria-label="Info"
        className="z-50 max-w-xs p-2 border-2 rounded-md shadow-md text-livid-300 bg-livid-300 focus:outline-none border-livid-300">
        <PopoverArrow {...popover} className="fill-current" />
        <Text variant="textXs" className="italic text-livid-800">
          {children}
        </Text>
      </Popover>
    </div>
  )
}

MyPopover.propTypes = {
  children: PropTypes.node,
}

export default MyPopover
