import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { usePopoverState, Popover, PopoverDisclosure, PopoverArrow } from 'reakit/Popover'
import { Info } from 'react-feather'

import { popoverData as cms } from '../../../assets/data'
import { Text } from '../../atoms'

const MyPopover = ({ children, ...props }) => {
  const popover = usePopoverState({ placement: 'top', animated: 150 })

  return (
    <div {...props}>
      <PopoverDisclosure {...popover} aria-label={cms.aria} className="focus:outline-none text-livid-500">
        <Info size={21} />
      </PopoverDisclosure>
      <Popover {...popover} aria-label="Info" tabIndex={0} className="z-10 focus:outline-none reakit-animate-3d">
        <div
          className={classnames(
            'max-w-xs px-4 py-3 border-2 rounded-md shadow-md text-livid-300 bg-livid-300 border-livid-300'
          )}>
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
