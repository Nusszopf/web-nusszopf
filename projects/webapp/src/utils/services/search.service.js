import { useEffect, useState, useContext, createContext } from 'react'
import PropTypes from 'prop-types'
import { throttle } from 'lodash'
import MeiliSearch from 'meilisearch'

// Improvments:
// - small response object (e.g. attributesToRetrieve: [""])
// - Set  `searchable-attributes`
// - Set `displayed-attributes`

export const SearchContext = createContext({})
export const useSearch = () => useContext(SearchContext)

export const SearchContextProvider = ({ children }) => {
  const [client, setClient] = useState()
  const [index, setIndex] = useState()
  const [term, setTerm] = useState('')
  const [hits, setHits] = useState([])

  useEffect(() => {
    const _client = new MeiliSearch({
      apiKey: process.env.MEILI_API_KEY,
      host: process.env.MEILI_DOMAIN,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
    const _index = _client.index('items')
    setClient(_client)
    setIndex(_index)
  }, [])

  const search = throttle(async (_term, _filter) => {
    console.log('search')
    try {
      const _hits = await index.search(_term, {
        matches: true,
        limit: 100,
        attributesToRetrieve: ['*'],
        // filters: 'req_type != others AND req_type != financials',
      })
      setHits(_hits)
    } catch (error) {
      console.error(error)
    }
  }, 250)

  return <SearchContext.Provider value={{ term, setTerm, hits, search }}>{children}</SearchContext.Provider>
}

SearchContextProvider.propTypes = {
  children: PropTypes.node,
}
