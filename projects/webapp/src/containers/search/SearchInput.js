import { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { X as XIcon, Search as SearchIcon, RefreshCw } from 'react-feather'
import { isEqual } from 'lodash'

import { InputGroup } from 'ui-library/stories/molecules'
import { useSearch } from '~/utils/services/search.service'
import FilterPopover from './FilterPopover'

const SearchInput = ({ className }) => {
  const { term, setTerm, search } = useSearch()
  const [isKeyCode13, setIsKeyCode13] = useState(false)
  const [currentFilter, setCurrentFilter] = useState({
    financials: true,
    rooms: true,
    companions: true,
    materials: true,
    others: true,
  })
  const [filter, setFilter] = useState(currentFilter)
  const inputRef = useRef()

  useEffect(() => {
    setTerm(term)
  }, [term, setTerm])

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

  const handleChange = event => {
    setCurrentFilter(filter)
    setTerm(event.target.value)
  }

  const handleBlur = () => {
    if (isKeyCode13) {
      handleSearch()
      setIsKeyCode13(false)
    }
  }

  const handleSearch = () => {
    setCurrentFilter(filter)
    search(term, filter)
  }

  const handleClear = event => {
    event.preventDefault()
    inputRef.current.focus()
    setTerm('')
  }

  return (
    <div className={classnames(className)}>
      <InputGroup className="rounded-lg bg-moss-400 text-moss-800">
        <InputGroup.LeftElement onClick={handleSearch}>
          <div className="p-1 -ml-1 transition duration-100 ease-out rounded-full hover:bg-moss-200">
            {term?.length > 0 && !isEqual(filter, currentFilter) ? (
              <RefreshCw size={21} strokeWidth={2.2} className="ml-0.5" />
            ) : (
              <SearchIcon size={24} />
            )}
          </div>
        </InputGroup.LeftElement>
        <InputGroup.Input
          ref={inputRef}
          value={term}
          color="moss"
          className="font-medium"
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Suchen & Entdecken"
        />
        {term?.length > 0 && (
          <InputGroup.RightElement onClick={handleClear} className={classnames({ hidden: term.length === 0 })}>
            <div className="p-1 -mr-1 transition duration-100 ease-out rounded-full hover:bg-moss-200">
              <XIcon size={24} />
            </div>
          </InputGroup.RightElement>
        )}
      </InputGroup>
      <FilterPopover filter={filter} setFilter={setFilter} className="float-right mt-2 mr-3" />
    </div>
  )
}

SearchInput.propTypes = {
  className: PropTypes.string,
}

export default SearchInput
