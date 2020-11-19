import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Text } from 'ui-library/stories/atoms'
import { SVGNusszopfLogoSmall } from '~/assets/logos'

const NusszopfCard = ({ title, description, greetings, className, ...props }) => (
  <div
    className={classnames(
      'flex flex-col w-full items-center justify-end p-6 rounded-lg md:p-8 md:px-12 lg:px-16 md:flex-row-reverse md:flex-row bg-lilac-300 text-lilac-800',
      className
    )}
    {...props}>
    <div className="md:max-w-xl hyphens-auto">
      <Text>{title}</Text>
      <Text variant="textSm" className="mt-3">
        {description}
      </Text>
      <Text variant="textSm" className="mt-2">
        {greetings}
      </Text>
    </div>
    <div className="flex items-center justify-center mt-10 mb-5 md:m-0 md:mr-12 lg:mr-16">
      <SVGNusszopfLogoSmall className="flex-shrink-0 w-auto h-18" />
    </div>
  </div>
)

NusszopfCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  greetings: PropTypes.string,
}

export default NusszopfCard
