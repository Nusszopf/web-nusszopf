import { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { X as XIcon, Search as SearchIcon } from 'react-feather'

import { Text } from 'ui-library/stories/atoms'
import { InputGroup } from 'ui-library/stories/molecules'
import { useSearch } from '~/utils/services/search.service'

const SearchInput = ({ className }) => {
  const { term, setTerm, search } = useSearch()
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
      search(event.target.value)
      inputRef.current.blur()
    }
  }

  const handleChange = event => {
    setTerm(event.target.value)
  }

  const handleSearch = () => {
    search(term)
  }

  const handleClear = event => {
    event.preventDefault()
    inputRef.current.focus()
    setTerm('')
  }

  return (
    <div className={classnames(className)}>
      <InputGroup className="rounded-lg bg-moss-400">
        <InputGroup.LeftElement onClick={handleSearch}>
          <div className="p-1 -ml-1 transition duration-100 ease-out rounded-full hover:bg-moss-200">
            <SearchIcon size={24} />
          </div>
        </InputGroup.LeftElement>
        <InputGroup.Input ref={inputRef} value={term} className="font-medium" onChange={handleChange} />
        <InputGroup.RightElement onClick={handleClear} className={classnames({ hidden: term.length === 0 })}>
          <div className="p-1 -mr-1 transition duration-100 ease-out rounded-full hover:bg-moss-200">
            <XIcon size={24} />
          </div>
        </InputGroup.RightElement>
      </InputGroup>
      <Text variant="textXs" className="float-right mt-2 mr-4 font-medium">
        Filter ReachUI Listbox
      </Text>
    </div>
  )
}

SearchInput.propTypes = {
  className: PropTypes.string,
}

export default SearchInput
