import { useState, useContext, createContext } from 'react'
import PropTypes from 'prop-types'
import { throttle } from 'lodash'

export const SearchContext = createContext({})
export const useSearch = () => useContext(SearchContext)

export const SearchContextProvider = ({ children }) => {
  const [term, setTerm] = useState('')
  const [hits, setHits] = useState([])

  const search = throttle((_term, _filter) => {
    console.log(_term, _filter)
  }, 250)

  return <SearchContext.Provider value={{ term, setTerm, hits, search }}>{children}</SearchContext.Provider>
}

SearchContextProvider.propTypes = {
  children: PropTypes.node,
}
