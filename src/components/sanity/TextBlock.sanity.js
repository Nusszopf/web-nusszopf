import PropTypes from 'prop-types'
import { find } from 'lodash'
import { Link, Text } from '../atoms'
import { LINK_EXTERN } from '../atoms/Link/link.atom'

const TextBlock = ({ node }) => {
  const { children, markDefs } = node
  return (
    <Text>
      {children.map(child => {
        const mark = find(markDefs, ['_key', child.marks[0]])
        return mark ? (
          <Link mode={LINK_EXTERN} href={mark.href} key={child._key}>
            {child.text}
          </Link>
        ) : (
          child.text
        )
      })}
    </Text>
  )
}

TextBlock.propTypes = {
  node: PropTypes.shape({
    markDefs: PropTypes.array,
    children: PropTypes.array,
  }),
}

export default TextBlock
