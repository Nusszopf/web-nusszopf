import PropTypes from 'prop-types'
import { Text } from '../../atoms'
import styles from './info.module.scss'

const Info = ({ children, className }) => (
  <div className={className ? `${styles.box} ${className}` : styles.box}>
    <Text>{children}</Text>
  </div>
)

Info.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Info
