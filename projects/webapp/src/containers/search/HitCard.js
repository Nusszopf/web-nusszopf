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
    const _hits = hits.filter(hit => hit.type === 'project')
    if (_hits.length <= 0) {
      return ''
    }
    const { req_title, req_description, ...project } = _hits[0]?._formatted
    return truncate(
      Object.values(project)
        .filter(i => i.length > 0)
        .join(' | '),
      { length: 90 }
    )
  }, [hits])

  return (
    <NLink href={`/projects/${projectId}`}>
      <a href={`/projects/${projectId}`} {...props}>
        <div
          className={classnames(
            'hyphens-auto border p-4 md:p-5 border-lilac-300 text-lilac-800 transition-shadow duration-150 ease-in-out rounded-lg bg-lilac-200 ring-1 ring-transparent hover:ring-lilac-300 cursor-pointer',
            className
          )}>
          <div className="flex justify-between mb-2">
            <div>
              <Text
                variant="textSm"
                className="mb-1.5 font-semibold leading-6"
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
          {projectHits.length > 0 && <Text variant="textXs" dangerouslySetInnerHTML={{ __html: projectHits }} />}
          {hits.map(
            hit =>
              hit.type === 'request' && <RequestCard className="mt-3" key={hit.itemsId} variant="hit" request={hit} />
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
