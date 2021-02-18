import React, { useRef, forwardRef } from 'react'
import PropTypes from 'prop-types'
import mergeRefs from 'react-merge-refs'
import classnames from 'classnames'
import { Search, X } from 'react-feather'
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from '@reach/combobox'

import { InputGroup } from '../../molecules'
import { ComboboxColor } from './Combobox.theme'

const MyCombobox = forwardRef(
  ({ aria, className, options, onSelect, onClear, color = 'lilac', disabled, ...props }, ref) => {
    const inputRef = useRef()

    const handleClear = () => {
      onClear()
      inputRef?.current?.focus()
    }

    return (
      <Combobox
        className={classnames(ComboboxColor[color].box, className)}
        aria-label={aria}
        onSelect={value => onSelect(options.find(option => option.value === value))}>
        <InputGroup disabled={disabled}>
          <InputGroup.Input
            as={ComboboxInput}
            ref={mergeRefs([inputRef, ref])}
            autoComplete="off"
            placeholder="Ort"
            color={color}
            {...props}
          />
          {props.value.length > 0 ? (
            <InputGroup.RightElement onClick={handleClear}>
              <X size={24} />
            </InputGroup.RightElement>
          ) : (
            <InputGroup.RightElement>
              <Search size={24} />
            </InputGroup.RightElement>
          )}
        </InputGroup>
        {options?.length > 0 && (
          <ComboboxPopover className="py-0.5 m-0 border-0 bg-transparent focus:outline-none">
            <div className={classnames('text-sm border-2 rounded-lg shadow-md', ComboboxColor[color].popover)}>
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
            </div>
          </ComboboxPopover>
        )}
      </Combobox>
    )
  }
)

MyCombobox.displayName = 'Combobox'
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
  disabled: PropTypes.bool,
}

export default MyCombobox
