import { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { X as XIcon, Search as SearchIcon, RefreshCw, Loader } from 'react-feather'
import { isEqual } from 'lodash'

import { InputGroup } from 'ui-library/stories/molecules'
import { useSearch } from '~/utils/services/search.service'
import FilterPopover from './FilterPopover'

const SearchInput = ({ className }) => {
  const { term, setTerm, filter, search, isLoading } = useSearch()
  const [isKeyCode13, setIsKeyCode13] = useState(false)
  const [newFilter, setNewFilter] = useState(filter)
  const inputRef = useRef()

  useEffect(() => {
    if (!inputRef?.current) return
    inputRef.current.addEventListener('keyup', handleEnter)
    return () => {
      inputRef.current.removeEventListener('keyup', handleEnter)
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

  const handleSearch = () => {
    if (!isLoading) {
      search(term, newFilter)
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
        <InputGroup.LeftElement onClick={handleSearch}>
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-moss-400">
            {isLoading ? (
              <Loader className="animate-spin" size={22} strokeWidth={2.2} />
            ) : !isEqual(filter, newFilter) ? (
              <RefreshCw size={20} strokeWidth={2.2} className="" />
            ) : (
              <SearchIcon size={24} />
            )}
          </div>
        </InputGroup.LeftElement>
        <InputGroup.Input
          ref={inputRef}
          value={term}
          color="moss"
          size="large"
          onChange={handleChange}
          onBlur={handleBlur}
          displayRing={false}
          placeholder="Suchen & Entdecken"
        />
        {term?.length > 0 && (
          <InputGroup.RightElement onClick={handleClear} className={classnames({ hidden: term.length === 0 })}>
            <div className="p-1 transition duration-100 ease-out rounded-full hover:bg-moss-400">
              <XIcon size={24} />
            </div>
          </InputGroup.RightElement>
        )}
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
