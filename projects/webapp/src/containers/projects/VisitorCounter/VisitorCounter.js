import { useMemo } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Eye } from 'react-feather'
import { padStart } from 'lodash'

import { Text } from 'ui-library/stories/atoms'

const VisitorCounter = ({ className, views, ...props }) => {
  const parsedViews = useMemo(() => {
    if (views === null || views === undefined) return ['0', '0', '0', '0']
    if (views > 9999) return ['+', '9', '9', '9', '9']
    return Array.from(padStart(String(views), 4, '0'), Number)
  }, [views])

  return (
    <div className={classnames('inline-flex items-center py-2 px-2.5 bg-lilac-150 rounded-md', className)} {...props}>
      <Eye size={22} className="mr-2" />
      {parsedViews.map((number, index) => (
        <div key={`vc-${index}`} className="flex items-center justify-center w-6 h-6 mx-0.5 rounded-md bg-lilac-300">
          <Text variant="textXs" className="font-medium">
            {number}
          </Text>
        </div>
      ))}
    </div>
  )
}

VisitorCounter.propTypes = {
  className: PropTypes.string,
  views: PropTypes.number,
}

export default VisitorCounter
