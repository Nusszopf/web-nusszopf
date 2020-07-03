import BlockContent from '@sanity/block-content-to-react'
import PropTypes from 'prop-types'
import { Heading } from '../atoms'
import { TextBlockSerializer } from '../../utils/services/sanity.service'

// current workaround because of sanity list/listItem
const parseInput = input => {
  const listItems = input.filter(child => child.listItem).map(child => child.children[0])
  return input
    .filter(child => !child.listItem || child.children[0] === listItems[0])
    .map(child => {
      if (child.listItem) {
        child.children = listItems
      }
      return child
    })
}

const TextSection = props => {
  const { text } = props.node
  const children = parseInput(text)
  return children.map(child => {
    if (child.style === 'normal') {
      return <BlockContent blocks={child} serializers={TextBlockSerializer} key={child._key} />
    } else if (child.style === 'h3' || child.style === 'h4') {
      return (
        <Heading as={child.style} key={child._key}>
          {child.children[0].text}
        </Heading>
      )
    } else {
      return null
    }
  })
}

TextSection.propTypes = {
  node: PropTypes.shape({
    text: PropTypes.arrayOf(
      PropTypes.shape({
        _key: PropTypes.string,
        string: PropTypes.string,
        children: PropTypes.array,
      })
    ),
  }),
}

export default TextSection
