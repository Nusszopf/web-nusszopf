import { useMemo, useEffect } from 'react'
import { groupBy } from 'lodash'
import { ArrowDownCircle, Loader } from 'react-feather'

import { Text, Button } from 'ui-library/stories/atoms'
import { Masonry } from 'ui-library/stories/organisms'
import { Frame } from 'ui-library/stories/templates'
import { useSearch, MEILI_CONFIG } from '~/utils/services/search.service'
import { initMeiliSearch } from '~/utils/functions/search.function'
import { HitCard, SearchInput, NoHitsSection } from '~/containers/search'
import { Page } from '~/components'
import { searchData as cms } from '~/assets/data'

const Search = ({ placeholderHits = [] }) => {
  const { hits, setHits, setNbHits, nbHits, loadMore, isLoadingMore } = useSearch()
  const groupedHits = useMemo(() => Object.entries(groupBy(hits?.hits, item => item.groupId)), [hits])

  useEffect(() => {
    setHits(placeholderHits)
    setNbHits(placeholderHits.nbHits)
  }, [setHits, setNbHits, placeholderHits])

  return (
    <Page navHeader={{ visible: true }} footer={{ className: 'bg-white' }} className="bg-white text-steel-700">
      <Frame className="py-6 md:pt-12 md:pb-10 bg-moss-200 text-moss-800">
        <div className="max-w-3xl mx-auto">
          <Text as="h1" variant="titleMd" className="mb-6">
            {cms.title}
          </Text>
          <SearchInput />
        </div>
      </Frame>
      <Frame className="flex-1 h-full my-8 break-all">
        {groupedHits.length > 0 ? (
          <Masonry
            breakpointCols={{ default: 3, 1023: 2, 639: 1 }}
            gap={{ wrap: '-ml-5 -mb-5', col: 'pl-5', row: 'mb-5' }}>
            {groupedHits.map(group => (
              <HitCard key={group[0]} projectId={group[0]} hits={group[1]} />
            ))}
          </Masonry>
        ) : (
          <NoHitsSection className="mt-4" />
        )}
      </Frame>
      {nbHits > hits?.hits?.length && (
        <Frame className="my-10 text-center">
          <Button
            onClick={loadMore}
            className="bg-moss-200"
            iconLeft={
              <>
                {isLoadingMore ? (
                  <Loader size={22} className="mr-2 animate-spin" />
                ) : (
                  <ArrowDownCircle className="mr-1.5" />
                )}
              </>
            }
            color="moss">
            {cms.more}
          </Button>
        </Frame>
      )}
    </Page>
  )
}

export async function getServerSideProps() {
  const { index } = await initMeiliSearch()
  const placeholderHits = await index.search('', MEILI_CONFIG)
  return { props: { placeholderHits } }
}

export default Search
