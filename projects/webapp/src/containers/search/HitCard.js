import { useMemo } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import NLink from 'next/link'
import { ChevronRight } from 'react-feather'
import { truncate } from 'lodash'

import { Text } from 'ui-library/stories/atoms'
import { RequestCard } from '~/components'

const HitCard = ({ projectId, hits, className, ...props }) => {
  const projectHits = useMemo(() => {
    const { req_title, req_description, ...project } = hits[0]?._formatted
    return Object.values(project)
      .filter(i => i.length > 0)
      .join(' | ')
  }, [hits])

  return (
    <NLink href={`/projects/${projectId}`}>
      <div
        className={classnames(
          'hyphens-auto border p-4 md:p-5 border-lilac-300 text-lilac-800 transition-shadow duration-150 ease-in-out rounded-lg bg-lilac-200 ring-1 ring-transparent hover:ring-lilac-300 cursor-pointer',
          className
        )}
        {...props}>
        <div className="flex justify-between mb-2">
          <div>
            <Text
              variant="textSm"
              className="font-semibold"
              dangerouslySetInnerHTML={{ __html: hits[0]?._formatted?.pro_title || hits[0]?.pro_title }}
            />
            <Text
              variant="textXs"
              dangerouslySetInnerHTML={{ __html: hits[0]?._formatted?.pro_goal || hits[0]?.pro_goal }}
            />
          </div>
          <div>
            <ChevronRight size={28} className="-mr-2" />
          </div>
        </div>
        {hits.map(
          hit =>
            hit.type === 'project' &&
            projectHits.length > 0 && (
              <div className="mb-4">
                <Text key={hit.itemsId} variant="textXs" dangerouslySetInnerHTML={{ __html: projectHits }} />
              </div>
            )
        )}
        {hits.map(
          hit =>
            hit.type === 'request' && <RequestCard className="mt-2" key={hit.itemsId} variant="hit" request={hit} />
        )}
      </div>
    </NLink>
  )
}

HitCard.propTypes = {
  className: PropTypes.string,
  hits: PropTypes.array,
  projectId: PropTypes.string,
}

export default HitCard
