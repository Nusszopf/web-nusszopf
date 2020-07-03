import PropTypes from 'prop-types'

import { Link } from '../../atoms'
import styles from './footer.module.scss'

const Footer = ({ items }) => {
  return (
    <footer className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        {items.map(item => (
          <Link mode={item.mode} className={styles.link} href={item.href} key={Math.random()}>
            {item.text}
          </Link>
        ))}
      </div>
    </footer>
  )
}

Footer.propTypes = {
  items: PropTypes.array,
}

export default Footer
