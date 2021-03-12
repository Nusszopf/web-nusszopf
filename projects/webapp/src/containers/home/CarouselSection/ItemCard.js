import PropTypes from 'prop-types'
import classnames from 'classnames'
import NLink from 'next/link'
import { ChevronRight } from 'react-feather'

import { Text } from 'ui-library/stories/atoms'
import { RequestCard } from '~/components'

const ItemCard = ({ project, className, ...props }) => {
  return (
    <NLink href={`/projects/${project.id}`}>
      <a href={`/projects/${project.id}`} {...props}>
        <div
          className={classnames(
            'border p-4 md:p-5 border-lilac-300 text-lilac-800 transition-shadow duration-150 ease-in-out rounded-lg bg-lilac-200 ring-1 ring-transparent hover:ring-lilac-300 cursor-pointer',
            className
          )}>
          <div className="flex justify-between mb-3">
            <div>
              <Text variant="textSm" className="mb-1.5 font-semibold leading-6">
                {project.title}
              </Text>
              <Text variant="textXs">{project.goal}</Text>
            </div>
            <div>
              <ChevronRight size={28} className="-mr-2" />
            </div>
          </div>
          {project.requests.map(request => (
            <RequestCard className="mt-2" key={request.id} variant="carousel" request={request} />
          ))}
        </div>
      </a>
    </NLink>
  )
}

ItemCard.propTypes = {
  className: PropTypes.string,
  project: PropTypes.object,
}

export default ItemCard
