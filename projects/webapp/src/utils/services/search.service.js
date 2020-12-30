import { useState, useContext, createContext } from 'react'

export const SearchContext = createContext({})
export const useSearch = () => useContext(SearchContext)

export const SearchContextProvider = props => {
  const [term, setTerm] = useState('')
  const [hits, setHits] = useState([])

  const search = _term => {
    console.log(_term)
  }

  return <SearchContext.Provider value={{ term, setTerm, hits, search }}>{props.children}</SearchContext.Provider>
}
