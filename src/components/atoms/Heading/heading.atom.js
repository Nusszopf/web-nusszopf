import PropTypes from 'prop-types'
import styles from './heading.module.scss'

const Heading = ({ children, className, as = 'h1' }) => {
  return (
    <>
      {as === 'h1' && <h1 className={`${styles.title} ${className}`}>{children}</h1>}
      {as === 'h2' && <h2 className={`${styles.subtitle} ${className}`}>{children}</h2>}
      {as === 'h3' && <h3 className={`${styles.sectionTitle} ${className}`}>{children}</h3>}
      {as === 'h4' && <h4 className={`${styles.sectionSubtitle} ${className}`}>{children}</h4>}
    </>
  )
}

Heading.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  as: PropTypes.string,
}
export default Heading
