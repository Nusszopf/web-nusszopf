import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Request } from '~/assets/icons'

import { Text } from 'ui-library/stories/atoms'

const StepCard = ({ className, step }) => (
  <div className={classnames('flex items-center p-5 border-2 rounded-lg border-steel-700', className)}>
    <div className="mr-5">
      {step.index === 3 ? (
        <Request width={48} height={48} />
      ) : (
        <div className="flex items-center justify-center w-12 h-12 border-2 rounded-full border-steel-700">
          <Text variant="textLgThin" className="">
            {step.index}
          </Text>
        </div>
      )}
    </div>
    <div>
      <Text variant="titleSm" className="mb-2 uppercase">
        {step.title}
      </Text>
      <Text variant="textSm">{step.description}</Text>
    </div>
  </div>
)

StepCard.propTypes = {
  className: PropTypes.string,
  step: PropTypes.object,
}

export default StepCard
