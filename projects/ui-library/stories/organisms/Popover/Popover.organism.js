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
        <Info size={21} />
      </PopoverDisclosure>
      <Popover {...popover} aria-label="Info" tabIndex={0} className="z-10 focus:outline-none">
        <div className="max-w-xs px-4 py-3 border-2 rounded-md shadow-md text-livid-300 bg-livid-300 border-livid-300 animate-opacitySlowFade">
          <PopoverArrow {...popover} className="fill-current" />
          <Text variant="textXs" className="italic text-livid-800 hyphens-auto">
            {children}
          </Text>
        </div>
      </Popover>
    </div>
  )
}

MyPopover.propTypes = {
  children: PropTypes.node,
}

export default MyPopover
