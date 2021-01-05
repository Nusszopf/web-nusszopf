import PropTypes from 'prop-types'
import classnames from 'classnames'
import { ChevronRight } from 'react-feather'
import { truncate } from 'lodash'

import { Text } from 'ui-library/stories/atoms'
import { RequestCard } from '~/components'

const HitCard = ({ projectId, hits, className, ...props }) => {
  const getProjectHits = () => {
    const { req_title, req_description, ...project } = hits[0]?._formatted
    return Object.values(project)
      .filter(i => i.length > 0)
      .join(' | ')
  }

  return (
    <div
      className={classnames(
        'w-full relative flex hyphens-auto border border-lilac-300 text-lilac-800 transition-shadow duration-150 ease-in-out rounded-lg cursor-pointer bg-lilac-200 ring-1 ring-transparent hover:ring-lilac-300',
        className
      )}
      {...props}>
      <div className="flex-1 p-4 text-left md:p-5 focus:outline-none" type="button">
        <Text
          className="mt-2"
          dangerouslySetInnerHTML={{ __html: hits[0]?._formatted?.pro_title || hits[0]?.pro_title }}
        />
        <Text
          variant="textSm"
          className="mt-2"
          dangerouslySetInnerHTML={{ __html: hits[0]?._formatted?.pro_goal || hits[0]?.pro_goal }}
        />
        <div className="flex flex-col mt-4">
          <div>
            {hits.map(
              hit =>
                hit.type === 'project' && (
                  <div key={hit.itemsId} className="mb-5">
                    <Text variant="textXs" dangerouslySetInnerHTML={{ __html: getProjectHits() }} />
                  </div>
                )
            )}
          </div>
          <div>
            {hits.map(hit => hit.type === 'request' && <RequestCard key={hit.itemsId} variant="hit" request={hit} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

HitCard.propTypes = {
  className: PropTypes.string,
  hits: PropTypes.array,
  projectId: PropTypes.string,
}

export default HitCard
