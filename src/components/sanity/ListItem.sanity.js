import PropTypes from 'prop-types'
import { ListItem } from '../atoms'

const SanityListItem = ({ node }) => (
  <>
    {node.children.map(child => (
      <ListItem key={child._key}>{child.text}</ListItem>
    ))}
  </>
)

SanityListItem.propTypes = {
  node: PropTypes.shape({
    children: PropTypes.arrayOf(
      PropTypes.shape({
        _key: PropTypes.string,
        text: PropTypes.string,
      })
    ),
  }),
}

export default SanityListItem
