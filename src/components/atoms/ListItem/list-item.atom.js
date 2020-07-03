import PropTypes from 'prop-types'
import styles from './list-item.module.scss'

const ListItem = ({ className, children }) => (
  <li className={className ? `${styles.listItem} ${className}` : styles.listItem}>{children}</li>
)

ListItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default ListItem
