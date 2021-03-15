import { useMemo } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import NLink from 'next/link'
import { ChevronRight } from 'react-feather'
import { truncate } from 'lodash'

import { Text } from 'ui-library/stories/atoms'
import { RequestCard } from '~/components'
import { REQUEST_CATEGORY } from '~/utils/enums'

const HitCard = ({ projectId, hits, className, ...props }) => {
  const projectInfos = useMemo(() => {
    const { pro_location_text, pro_description, pro_team, pro_motto, pro_author } = hits[0]._formatted
    return truncate(
      Object.values({ pro_description, pro_location_text, pro_team, pro_motto, pro_author })
        .filter(i => i?.length > 0)
        .join(' | '),
      { length: 90 }
    )
  }, [hits])

  return (
    <NLink href={`/projects/${projectId}`}>
      <a href={`/projects/${projectId}`} {...props}>
        <div
          className={classnames(
            'border p-4 md:p-5 border-lilac-300 text-lilac-800 transition-shadow duration-150 ease-in-out rounded-lg bg-lilac-200 ring-1 ring-transparent hover:ring-lilac-300 cursor-pointer',
            className
          )}>
          <div className="flex justify-between mb-2">
            <div>
              <Text
                variant="textSm"
                className="mb-1.5 font-semibold leading-6"
                dangerouslySetInnerHTML={{ __html: hits[0]?._formatted?.pro_title || hits[0].pro_title }}
              />
              <Text
                variant="textXs"
                dangerouslySetInnerHTML={{ __html: hits[0]?._formatted?.pro_goal || hits[0].pro_goal }}
              />
            </div>
            <div>
              <ChevronRight size={28} className="-mr-2" />
            </div>
          </div>
          <Text variant="textXs" dangerouslySetInnerHTML={{ __html: projectInfos }} />
          {hits.map(
            hit =>
              hit.req_type !== REQUEST_CATEGORY.none && (
                <RequestCard className="mt-3" key={hit.itemsId} variant="hit" request={hit} />
              )
          )}
        </div>
      </a>
    </NLink>
  )
}

HitCard.propTypes = {
  className: PropTypes.string,
  hits: PropTypes.array,
  projectId: PropTypes.string,
}

export default HitCard
