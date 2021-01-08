import { useEffect, useState, useContext, createContext, useMemo } from 'react'
import PropTypes from 'prop-types'
import MeiliSearch from 'meilisearch'
import { groupBy, uniqBy } from 'lodash'

import { useToasts } from 'ui-library/services/Toasts.service'
import { searchData as cms } from '~/assets/data'

// Improvments:
// - Set  `searchable-attributes`
// - Set `displayed-attributes`

// TODO
// 1. scroll-to-top (fab)
// 2. bug: truncate text length where needed (UI)
// 3. bug: get initalState serverside

const OFFSET = 100
export const MEILI_CONFIG = {
  limit: OFFSET,
  attributesToRetrieve: ['itemsId', 'groupId', 'type', 'pro_title', 'pro_goal', 'req_type'],
  attributesToHighlight: [
    'pro_title',
    'pro_goal',
    'pro_description',
    'pro_team',
    'pro_motto',
    'pro_location_text',
    'pro_author',
    'req_title',
    'req_description',
  ],
}

export const SearchContext = createContext({})
export const useSearch = () => useContext(SearchContext)

export const SearchContextProvider = ({ children }) => {
  const { notify } = useToasts()
  const [client, setClient] = useState()
  const [index, setIndex] = useState()
  const [term, setTerm] = useState('')
  const [hits, setHits] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [filter, setFilter] = useState({
    financials: true,
    rooms: true,
    companions: true,
    materials: true,
    others: true,
  })

  useEffect(() => {
    const _client = new MeiliSearch({
      apiKey: process.env.MEILI_API_KEY,
      host: process.env.MEILI_DOMAIN,
    })
    const _index = _client.index('items')
    setClient(_client)
    setIndex(_index)
  }, [])

  const groupedHits = useMemo(() => Object.entries(groupBy(hits?.hits, item => item.groupId)), [hits])

  const search = async (_term, _filter) => {
    if (isLoading) {
      return
    }
    setIsLoading(true)
    setFilter(_filter)
    const filterQuery = Object.entries(_filter)
      .filter(item => !item[1])
      .map(item => `req_type != ${item[0]}`)
      .join(' AND ')
    try {
      const _hits = await index.search(_term, {
        ...MEILI_CONFIG,
        filters: filterQuery.length > 0 ? filterQuery : null,
      })
      setHits() // force update
      setHits(_hits)
      setIsLoading(false)
    } catch (error) {
      setHits()
      setIsLoading(false)
    }
  }

  const loadMore = async () => {
    if (isLoadingMore) {
      return
    }
    setIsLoadingMore(true)
    const filterQuery = Object.entries(filter)
      .filter(item => !item[1])
      .map(item => `req_type != ${item[0]}`)
      .join(' AND ')
    try {
      const _hits = await index.search(term, {
        ...MEILI_CONFIG,
        offset: hits.offset + OFFSET,
        filters: filterQuery.length > 0 ? filterQuery : null,
      })
      const moreHits = uniqBy(hits.hits.concat(_hits.hits), 'itemsId')
      setHits({ ..._hits, hits: moreHits })
      setIsLoadingMore(false)
    } catch (error) {
      notify({ type: 'error', message: cms.error.loadMore })
      setIsLoadingMore(false)
    }
  }

  return (
    <SearchContext.Provider
      value={{ term, setTerm, filter, hits, groupedHits, setHits, isLoading, isLoadingMore, search, loadMore }}>
      {children}
    </SearchContext.Provider>
  )
}

SearchContextProvider.propTypes = {
  children: PropTypes.node,
}
