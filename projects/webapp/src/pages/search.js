import { useMemo } from 'react'
import { groupBy } from 'lodash'

import { Frame } from 'ui-library/stories/templates'
import { useSearch } from '~/utils/services/search.service'
import { Page } from '~/components'
import { HitCard, SearchInput } from '~/containers/search'

const Search = () => {
  const { hits } = useSearch()
  const groupedHits = useMemo(() => Object.entries(groupBy(hits.hits, item => item.groupId)), [hits])
  console.log(groupedHits)
  return (
    <Page navHeader={{ visible: true }} footer={{ className: 'bg-white' }} className="bg-white text-steel-700">
      <Frame className="pt-6 pb-4 md:pt-12 bg-moss-200">
        <SearchInput className="max-w-2xl mx-auto" />
      </Frame>
      <Frame className="flex-1 h-full mt-10 break-all">
        <div className="space-y-4">
          {groupedHits.length > 0 &&
            groupedHits.map(group => <HitCard key={group[0]} projectId={group[0]} hits={group[1]} />)}
        </div>
      </Frame>
    </Page>
  )
}

export default Search
