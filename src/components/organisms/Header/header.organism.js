import { Link } from '../../atoms'
import { LINK_INTERN } from '../../atoms/Link/link.atom'

import styles from './header.module.scss'

const Header = () => {
  return (
    <header className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <Link href="/" mode={LINK_INTERN}>
          nz-logo
        </Link>
      </div>
    </header>
  )
}

export default Header
