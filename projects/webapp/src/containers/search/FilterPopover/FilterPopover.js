import PropTypes from 'prop-types'
import classnames from 'classnames'
import { usePopoverState, Popover, PopoverDisclosure } from 'reakit/Popover'
import { ChevronDown } from 'react-feather'

import { searchData as cms } from '~/assets/data'
import { Checkbox, Text } from 'ui-library/stories/atoms'

const FilterPopover = ({ className, filter, setFilter }) => {
  const popover = usePopoverState({ placement: 'bottom-end', unstable_offset: [0, 8], animated: 100 })

  return (
    <div className={classnames('text-moss-800', className)}>
      <PopoverDisclosure
        data-test="btn_disclosure_filter-popover"
        {...popover}
        className="flex font-semibold focus:outline-none">
        <div className="flex px-4 py-1 rounded-full bg-moss-450">
          <Text variant="textXs">{cms.filter.title} </Text>
          <ChevronDown size={20} strokeWidth={2.5} className="mt-1 ml-1 -mr-1" />
        </div>
      </PopoverDisclosure>
      <Popover {...popover} aria-label="Info" tabIndex={0} className="z-10 focus:outline-none reakit-animate-scale">
        <div className="px-4 py-2 text-sm font-medium border-2 rounded-md shadow-md w-52 bg-moss-300 border-moss-800">
          <div className="my-2">
            <Checkbox
              data-test="checkbox_companions_filter-popover"
              checked={filter.companions}
              onChange={() => setFilter(state => ({ ...state, companions: !state.companions }))}
              name="companions"
              aria-label={cms.filter.options.companions}
              label={cms.filter.options.companions}
            />
          </div>
          <div className="my-2">
            <Checkbox
              data-test="checkbox_rooms_filter-popover"
              checked={filter.rooms}
              onChange={() => setFilter(state => ({ ...state, rooms: !state.rooms }))}
              name="rooms"
              aria-label={cms.filter.options.rooms}
              label={cms.filter.options.rooms}
            />
          </div>
          <div className="my-2">
            <Checkbox
              data-test="checkbox_materials_filter-popover"
              checked={filter.materials}
              onChange={() => setFilter(state => ({ ...state, materials: !state.materials }))}
              name="materials"
              aria-label={cms.filter.options.materials}
              label={cms.filter.options.materials}
            />
          </div>
          <div className="my-2">
            <Checkbox
              data-test="checkbox_financials_filter-popover"
              checked={filter.financials}
              onChange={() => setFilter(state => ({ ...state, financials: !state.financials }))}
              name="financials"
              aria-label={cms.filter.options.financials}
              label={cms.filter.options.financials}
            />
          </div>
          <div className="my-2">
            <Checkbox
              data-test="checkbox_others_filter-popover"
              checked={filter.others}
              onChange={() => setFilter(state => ({ ...state, others: !state.others }))}
              name="others"
              aria-label={cms.filter.options.others}
              label={cms.filter.options.others}
            />
          </div>
          <div className="my-2">
            <Checkbox
              data-test="checkbox_none_filter-popover"
              checked={filter.none}
              onChange={() => setFilter(state => ({ ...state, none: !state.none }))}
              name="none"
              aria-label={cms.filter.options.none}
              label={cms.filter.options.none}
            />
          </div>
        </div>
      </Popover>
    </div>
  )
}

FilterPopover.propTypes = {
  className: PropTypes.string,
  setFilter: PropTypes.func,
  filter: PropTypes.object,
}

export default FilterPopover
