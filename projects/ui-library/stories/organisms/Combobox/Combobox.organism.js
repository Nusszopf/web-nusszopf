import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Search, X } from 'react-feather'
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from '@reach/combobox'

import { InputGroup } from '../../molecules'
import { ComboboxColor } from './Combobox.theme'

const MyCombobox = ({ aria, className, options, onSelect, onClear, color = 'lilac', ...props }) => (
  <Combobox
    className={classnames(ComboboxColor[color].box, className)}
    aria-label={aria}
    onSelect={value => onSelect(options.find(option => option.value === value))}>
    <InputGroup>
      <InputGroup.Input
        as={ComboboxInput}
        autoComplete="off"
        selectOnClick
        placeholder="Ort"
        color={color}
        {...props}
      />
      {props?.value?.length > 0 ? (
        <InputGroup.RightElement onClick={onClear}>
          <X size={28} />
        </InputGroup.RightElement>
      ) : (
        <InputGroup.RightElement>
          <Search size={28} />
        </InputGroup.RightElement>
      )}
    </InputGroup>
    {options?.length > 0 && (
      <ComboboxPopover
        className={classnames(
          'p-1 m-0 text-sm border-2 rounded-lg focus:outline-none shadow-md',
          ComboboxColor[color].popover
        )}>
        <ComboboxList className="p-0 m-0 list-none select-none text-bold">
          {options.map(option => (
            <ComboboxOption
              className={classnames(
                'px-3 py-2  m-0 rounded-lg cursor-pointer focus:outline-none',
                ComboboxColor[color].option
              )}
              key={option.key}
              value={option.value}
            />
          ))}
        </ComboboxList>
      </ComboboxPopover>
    )}
  </Combobox>
)

MyCombobox.propTypes = {
  aria: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.keys(ComboboxColor)),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      key: PropTypes.string,
    })
  ),
  onSelect: PropTypes.func,
  onClear: PropTypes.func,
  value: PropTypes.string,
}

export default MyCombobox
