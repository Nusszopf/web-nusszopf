import PropTypes from 'prop-types'
import styles from './section.module.scss'

const Section = ({ children }) => <section className={styles.section}>{children}</section>

Section.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
}

export default Section
