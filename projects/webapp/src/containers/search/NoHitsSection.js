import PropTypes from 'prop-types'
import classnames from 'classnames'
import { PlusCircle } from 'react-feather'

import { Text, Route } from 'ui-library/stories/atoms'
import { searchData as cms } from '~/assets/data'

const NoHitsSection = ({ className }) => (
  <div className={classnames('max-w-3xl mx-auto break-normal', className)}>
    <div className="px-6 py-8 rounded-lg sm:px-8 lg:p-12 bg-livid-300 text-livid-800">
      <Text>{cms.empty.title}</Text>
      <Text variant="textSm" className="mt-3">
        {cms.empty.description}
      </Text>
      <div className="mt-6 lg:mt-8">
        <Route
          ariaLabel={cms.empty.action.meta}
          variant="button"
          size="large"
          className="bg-lilac-200"
          color="lilac"
          href="/user/project/create"
          iconLeft={<PlusCircle className="hidden mr-2 -ml-1 sm:inline-block" />}>
          {cms.empty.action.text}
        </Route>
      </div>
    </div>
  </div>
)

NoHitsSection.propTypes = {
  className: PropTypes.string,
}

export default NoHitsSection
