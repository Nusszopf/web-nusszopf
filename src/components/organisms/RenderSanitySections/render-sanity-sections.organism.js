import PropTypes from 'prop-types'
import { upperFirst } from 'lodash'
import BlockContent from '@sanity/block-content-to-react'

import * as serializers from '../../../utils/services/sanity.service'
import { Section } from '../../atoms'

const RenderSanitySections = ({ sections }) => {
  if (!sections) {
    console.error('Missing section')
    return null
  }

  const resolveSerializer = section => {
    const serializer = serializers[upperFirst(`${section._type}Serializer`)]
    if (serializer) {
      return serializer
    }
    console.error('Cant find section', section)
    return null
  }

  return (
    <>
      {sections.map(section => {
        const serializer = resolveSerializer(section)
        return (
          <Section key={section._key}>
            <BlockContent blocks={section} serializers={serializer} />
          </Section>
        )
      })}
    </>
  )
}

RenderSanitySections.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      _key: PropTypes.string,
    })
  ),
}

export default RenderSanitySections
