import { useMemo } from 'react'
import { groupBy } from 'lodash'

import { Masonry } from 'ui-library/stories/organisms'
import { Frame } from 'ui-library/stories/templates'
import { useSearch } from '~/utils/services/search.service'
import { Page } from '~/components'
import { HitCard, SearchInput } from '~/containers/search'

const Search = () => {
  const { hits } = useSearch()
  const groupedHits = useMemo(() => Object.entries(groupBy(hits.hits, item => item.groupId)), [hits])

  return (
    <Page navHeader={{ visible: true }} footer={{ className: 'bg-white' }} className="bg-white text-steel-700">
      <Frame className="pt-6 pb-4 md:pt-12 bg-moss-200">
        <SearchInput className="max-w-2xl mx-auto" />
      </Frame>
      <Frame className="flex-1 h-full my-8 break-all">
        {groupedHits.length > 0 && (
          <Masonry
            breakpointCols={{ default: 3, 1023: 2, 639: 1 }}
            gap={{ wrap: '-ml-5 -mb-5', col: 'pl-5', row: 'mb-5' }}>
            {groupedHits.map(group => (
              <HitCard key={group[0]} projectId={group[0]} hits={group[1]} />
            ))}
          </Masonry>
        )}
      </Frame>
    </Page>
  )
}

export default Search
