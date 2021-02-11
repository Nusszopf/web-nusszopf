import { useRef, useEffect, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { X as XIcon, Search as SearchIcon, RefreshCw, Loader } from 'react-feather'
import { isEqual, throttle } from 'lodash'
import { Clickable } from 'reakit/Clickable'

import { InputGroup } from 'ui-library/stories/molecules'
import { useSearch } from '~/utils/services/search.service'
import { searchData as cms } from '~/assets/data'
import { FilterPopover } from '../index'

const SearchInput = ({ className }) => {
  const { term, setTerm, filter, search, isLoading } = useSearch()
  const [isKeyCode13, setIsKeyCode13] = useState(false)
  const [newFilter, setNewFilter] = useState(filter)
  const inputRef = useRef()

  useEffect(() => {
    if (!inputRef?.current) return
    const ref = inputRef.current
    ref.addEventListener('keyup', handleEnter)
    return () => {
      ref.removeEventListener('keyup', handleEnter)
    }
  }, [inputRef])

  const handleEnter = event => {
    if (event.keyCode === 13) {
      setIsKeyCode13(true)
      inputRef.current.blur()
    }
  }

  const handleBlur = () => {
    if (isKeyCode13) {
      handleSearch()
      setIsKeyCode13(false)
    }
  }

  const handleChange = event => {
    setTerm(event.target.value)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const throttleSearch = useCallback(
    throttle(fn => fn(), 500),
    []
  )

  const handleSearch = () => {
    if (!isLoading) {
      throttleSearch(() => search(term, newFilter))
    }
  }

  const handleClear = event => {
    event.preventDefault()
    inputRef.current.focus()
    setTerm('')
  }

  return (
    <div className={className}>
      <InputGroup className="rounded-lg text-moss-800">
        <InputGroup.Input
          ref={inputRef}
          aria-label={cms.input}
          value={term}
          color="moss"
          size="large"
          onChange={handleChange}
          onBlur={handleBlur}
          displayRing={false}
          placeholder={cms.input}
          className="pr-32"
        />
        <InputGroup.RightElement variant="block">
          <>
            <Clickable
              as="div"
              onClick={handleClear}
              className={classnames(
                { hidden: term.length === 0 },
                'p-1 mr-3 transition cursor-pointer duration-100 ease-out rounded-full hover:bg-moss-450 outline-none'
              )}>
              <XIcon size={24} />
            </Clickable>
            <Clickable
              as="div"
              onClick={handleSearch}
              className="flex items-center justify-center w-16 h-16 -mr-3 border-t-2 border-b-2 border-r-2 outline-none cursor-pointer rounded-r-md border-moss-800 bg-moss-450">
              {isLoading ? (
                <Loader className="animate-spin" size={22} strokeWidth={2.2} />
              ) : !isEqual(filter, newFilter) ? (
                <RefreshCw size={24} strokeWidth={2.2} />
              ) : (
                <SearchIcon size={27} />
              )}
            </Clickable>
          </>
        </InputGroup.RightElement>
      </InputGroup>
      <FilterPopover filter={newFilter} setFilter={setNewFilter} className="float-right mt-3" />
    </div>
  )
}

SearchInput.propTypes = {
  className: PropTypes.string,
  isLoading: PropTypes.bool,
}

export default SearchInput
